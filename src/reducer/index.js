import auditReducer from './audit';
import counterReducer from './counter'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    auditReducer, counterReducer
})

export default allReducers;