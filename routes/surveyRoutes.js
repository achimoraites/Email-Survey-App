const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app =>{

   

    app.delete('/api/surveys/:surveyId', requireLogin , async (req, res)=> {
        const user = req.user;
        const deleteSurvey = await Survey.findOneAndDelete({
            _id : surveyId
        }).exec();
        res.send(deleteSurvey);
    });

    app.get('/api/surveys/:surveyId/:choice', (req, res) =>{
        res.send(`Thank you for voting!!!`);
    });

    app.post('/api/surveys/webhooks', (req, res) => {
        const p = new Path('/api/surveys/:surveyId/:choice');
       _.chain(req.body)
        .map( (event) => {
            const match = p.test(new URL(event.url).pathname);
            if (match) {
                const { email } = event;
                const { surveyId, choice } = match;
                return { email, surveyId, choice };
            }
        })
        .compact()
        .uniqWith(_.isEqual)
        .each((event) => {
            console.log('choice', event.choice);
          
            Survey.updateOne(
                {
                  _id: event.surveyId,
                  recipients: {
                    $elemMatch: { email: event.email, clicked: false }
                  }
                },
                {
                  $inc: { [event.choice]: 1 },
                  $set: { 'recipients.$.clicked': true },
                  lastResponded: new Date()
                }
      ).exec();         
        })
        .value();
        res.send({});
    });

    app.route('/api/surveys')
    .get(requireLogin, async (req, res)=> {
        const user = req.user;
        const surveys = await Survey.find({
            _user: user
        })
        .select({recipients: false});
        res.send(surveys);
    })
    .post(requireLogin, requireCredits, async (req, res) => {
        const { title, subject, body, recipients } = req.body;
      
        const survey = new Survey({
            title, 
            subject, 
            body, 
            recipients : recipients.split(',').map(email => ({email: email.trim()})),
            _user : req.user.id,
            dateSent: Date.now()
        });

        // send the emails
        const mailer = new Mailer(survey, surveyTemplate(survey));
        try {
            await mailer.send();
            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save();
            console.log(user);
            res.send(user);
        } catch (err) {
            res.status(422).send(err);
        }
    });
}