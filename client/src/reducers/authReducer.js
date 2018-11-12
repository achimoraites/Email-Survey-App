import { FETCH_USER, LOG_OUT } from '../actions/types';

export default function(state = null, action){
    console.log(action);
    switch(action.type){
        case FETCH_USER:
        return action.payload || false;
        case LOG_OUT:
        // if logout is true return that the auth is now false
        return action.payload ? false : state;
        default:
          return state;
    }
}