import {combineReducers} from 'redux';
import {selfInfReducer} from './selfInf';

export const rootReducer = combineReducers({
  selfInf: selfInfReducer,
});
