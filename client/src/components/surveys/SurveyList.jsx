import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions/surveys';
import Survey from './Survey';


class SurveyList extends Component {

    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        if (this.props.surveys.length === 0) {
            return <h5 className="red-text center">You have no surveys yet!</h5>
        }
        return this.props.surveys.reverse().map(survey => {
            return (
                <Survey survey={survey} />
            )
        })
    }

    render() {
        return (
            <div>
                <h3 className="center" style={{marginBottom: '2em'}}>Surveys Sent</h3>
                {this.renderSurveys()}
            </div>
        )
    }
}

function mapStateToProps ({surveys}) {
    return {
        surveys
    };
}

export default connect(mapStateToProps,{fetchSurveys})(SurveyList);