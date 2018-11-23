import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import FIELDS from '../../utils/fields';

const SurveyFormReview = ({ onCancel, formValues }) => {

    const reviewFields = _.map(FIELDS, field => {
        return  <div style={{marginBottom: '1em'}} key={field.name}>
                    <label style={{fontSize: '1.3em', color: '#fff'}}>{field.label}</label>
                    <div>{formValues[field.name]}</div>
                </div>;
    });

    return (
        <div>
            <h5>Please confirm your entries</h5>

            <div style={{marginBottom: '2em',
                        backgroundColor:' #832f18',
                        padding: '1em',
                        fontSize: '1.2em',
                        color: '#fff'
                        }}>
               {_.each(reviewFields, rf =>{
                   return rf;
               })}
            </div>

            <button 
            className="yellow darken-3 btn-flat"
            onClick={onCancel}><i className="material-icons left" >arrow_back</i> Back</button>
            <button 
            className="blue darken-3 btn-flat right white-text"
            onClick={onCancel}><i className="material-icons white-text left" >done</i> Done</button>
        </div>
        
    )
};


function mapStateToProps(state) {
    const {form: {surveyForm: {values} }} = state;
    console.log('values :: ',values)
    return {
        formValues: values
    }
}

export default connect(mapStateToProps)(SurveyFormReview);