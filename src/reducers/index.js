import { combineReducers } from 'redux';
import authReducer from './authReducer';

export default combineReducers({
  todo: () => { return {}; },
  auth: authReducer
});
