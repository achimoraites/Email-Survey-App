const keys = require('../config/keys');
const stripe = require("stripe")(keys.stripeSecretKey);


module.exports = app =>{

    app.post('/api/stripe', async (req, res) =>{

        const {id, email} = req.body;


        const charge = await stripe.charges.create({
                amount: 500,
                currency: "usd",
                source: id, // obtained with Stripe.js
                description: `Charge of $5 for 5 credits for ${email}`
            });
        
            req.user.credits += 5;
            const user = await req.user.save();
            res.send(user);
 
    });

};