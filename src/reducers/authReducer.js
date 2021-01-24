import { SIGN_IN, SIGN_OUT, GET_USER_INFO } from '../actions/types.js';

const INITIAL_STATE = {
  user: null,
  isLoggedIn: false,
  accessToken: null
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN: case GET_USER_INFO:
      return {
        ...state,
        accessToken: action.payload.accessToken,
        user: action.payload.user,
        isLoggedIn: true
      };
    case SIGN_OUT:
      return { ...state, user: null, isLoggedIn: false, accessToken: null };
    default:
      return state;
  }
};

export default authReducer;
