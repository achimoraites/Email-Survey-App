import axios from 'axios';
import {fetchUserAction} from '../auth/index';


export const sendSurvey = (survey, history) => async dispatch => {
    const res = await axios.post('/api/surveys', survey);
    history.push('/surveys');
    dispatch(fetchUserAction(res.data));
}