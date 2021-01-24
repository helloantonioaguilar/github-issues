import {
  SIGN_IN, SIGN_OUT, GET_USER_INFO
} from './types';
import history from '../history';
import server from '../api/server';
import github from '../api/github';

export const signIn = code => async dispatch => {
  const { data: { token } } = await server.get(`/auth/${code}`);
  localStorage.setItem('token', token);
  const { data: user } = await github.get('/user');
  dispatch({
    type: SIGN_IN,
    payload: {
      accessToken: token,
      user
    }
  });
  history.push('/profile');
};

export const signOut = () => dispatch => {
  history.push('/');
  localStorage.removeItem('token');
  dispatch({ type: SIGN_OUT });
};

export const getUserInfo = () => async dispatch => {
  const { data: user } = await github.get('/user');
  const token = localStorage.getItem('token');
  dispatch({
    type: GET_USER_INFO,
    payload: {
      user,
      accessToken: token
    }
  });
};
