/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';
import { deleteSurvey } from '../../actions/surveys';

// TODO: add the delete action !

const Survey = ({ survey }) => {
    // console.log('survey',survey);
    return <div style={{marginTop: '1em'}}>
        <div className="card blue-grey darken-3">
        <span onClick={deleteSurvey(survey)} style={{color: '#fff', margin: '0.5em'}} className="right" title={`Delete ${survey.title} ?`}><i className="material-icons">clear</i></span>
            <div style={{marginTop: '1em'}} className="card-content white-text">
                <span className="card-title">{survey.title}</span>
                <p>{survey.body}</p>
                <p className="right">Sent On : {new Date(survey.dateSent).toLocaleDateString()}</p>
            </div>
            <div className="card-action">
                <a>Yes : {survey.yes}</a>
                <a className="right">No : {survey.no}</a>
            </div>
        </div>
    </div>
}



export default connect(null,{deleteSurvey})(Survey);