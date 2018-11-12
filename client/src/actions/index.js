import axios from 'axios';
import { fetchUserAction, logoutAction} from './auth'


export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch(fetchUserAction(res.data));
};

export const logoutUser = () => async dispatch => {
    const res = await axios.get('/api/logout');
    const { status } = res;
    if (status === 200) {
        dispatch(logoutAction());
    }
};

export const handleToken = token => async dispatch => {
    const res = await axios.post('/api/stripe',token);
    dispatch(fetchUserAction(res.data));
};