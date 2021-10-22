import {combineReducers} from 'redux';
import {photoReducer} from './photo';
import {selfInfReducer} from './selfInf';
import {socialReducer} from './social';

export const rootReducer = combineReducers({
  selfInf: selfInfReducer,
  social: socialReducer,
  photo: photoReducer,
});
