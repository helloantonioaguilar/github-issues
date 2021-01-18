import {
  UPDATE_QUERY
} from '../actions/types';

const INITIAL_STATE = { repos: {}, query: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_QUERY:
      return { ...state, query: action.payload };
    default:
      return state;
  }
};
