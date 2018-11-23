import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import FIELDS from '../../utils/fields';
import * as actions from '../../actions/surveys';

const SurveyFormReview = ({ onCancel, formValues, sendSurvey, history }) => {

    const reviewFields = _.map(FIELDS, ({name, label}) => {
        return  <div style={{marginBottom: '1em'}} key={name}>
                    <label style={{fontSize: '1.3em', color: '#fff'}}>{label}</label>
                    <div>{formValues[name]}</div>
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
            className="yellow darken-3 btn-flat white-text"
            onClick={onCancel}><i className="material-icons left" >arrow_back</i> Back</button>
            <button 
            className="blue darken-3 btn-flat right white-text"
            onClick={()=> sendSurvey(formValues, history)}><i className="material-icons white-text right" >send</i> Send Survey</button>
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

export default connect(mapStateToProps,actions)(withRouter(SurveyFormReview));