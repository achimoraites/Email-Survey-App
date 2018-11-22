// SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from 'react'
import SurveyForm from './SurveyForm';

class SurveyNew extends Component {
    render() {
        return(
            <div style={{margin: '3em auto'}}>
                <SurveyForm />
            </div>
        )
    }
}

export default SurveyNew;