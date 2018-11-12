import { FETCH_USER, LOG_OUT } from '../../actionTypes';

export const fetchUserAction = (data) =>{
const action = {
    type: FETCH_USER, 
    payload: data
};
return action;
};