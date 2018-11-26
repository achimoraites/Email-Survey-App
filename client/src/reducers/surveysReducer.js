import { FETCH_SURVEYS } from '../actions/actionTypes';

export default function (state = [], action) {
    if(action.type === FETCH_SURVEYS) {
        return action.payload;
    }
    return state;
}