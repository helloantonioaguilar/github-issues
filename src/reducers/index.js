import { combineReducers } from 'redux';
import repoReducer from './repoReducer';

export default combineReducers({
  todo: () => { return {}; },
  github: repoReducer
});
