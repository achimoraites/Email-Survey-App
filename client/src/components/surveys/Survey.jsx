import React from 'react';

const Survey = ({ survey }) => {
    // console.log('survey',survey);
    return <div style={{marginTop: '1em'}}>
        <div className="card blue-grey darken-3">
            <div className="card-content white-text">
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

export default Survey;