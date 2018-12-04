import axios from 'axios';
import {fetchUserAction} from '../auth/index';
import { FETCH_SURVEYS } from '../actionTypes';


export const sendSurvey = (survey, history) => async dispatch => {
    const res = await axios.post('/api/surveys', survey);
    history.push('/surveys');
    dispatch(fetchUserAction(res.data));
}

export const fetchSurveys = () => async dispatch => {
    const res = await axios.get('/api/surveys');
    dispatch({type: FETCH_SURVEYS, payload: res.data});
}

// TODO: this needs to work somehow!
export const deleteSurvey = surveyId => async dispatch => {
    console.log('delete',surveyId);
    console.log(`/api/surveys/${surveyId}`);
    try {
        await axios.delete(`/api/surveys/${surveyId}`);
        // const res = await axios.get('/api/surveys');
        // dispatch({type: FETCH_SURVEYS, payload: res.data});
    } catch (error) {
        console.error(error);
    }
 
}
