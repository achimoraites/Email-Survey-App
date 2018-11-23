// SurveyForm shows a form for a user to add input
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from  '../../utils/validateEmails';
import FIELDS from '../../utils/fields';




class SurveyForm extends Component {

    renderFields() {
        return _.map(FIELDS, ({label, name}) => {
            return  <Field key={name}  label={label} type="text" name={name} component={SurveyField} />
        });   
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                  {this.renderFields()}
                  <Link to="/surveys" className="red btn-flat left white-text"> Cancel  <i className="material-icons left">clear</i></Link>
                  <button className="teal btn-flat right white-text" type="submit">Next <i className="material-icons right">arrow_forward</i></button>
                </form>
                
            </div>
        )
    }

}

// if errors is empty it's valid
function validate(values) {
    const errors = {};

    errors.recipients = validateEmails(values.recipients);
    
    _.each(FIELDS, ({ name }) =>{
        if (!values[name]) {
            errors[name] = `${name} cannot be empty !`;
        }
    })

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);