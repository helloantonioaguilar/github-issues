import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  signOut, getUserInfo
} from '../../actions';

const GitHubOAuth = ({ isLoggedIn, signOut, getUserInfo }) => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && !isLoggedIn) {
      getUserInfo();
    }
  }, []);

  const requestAuth = () => {
    const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    const authUrl = 'https://github.com/login/oauth/authorize';
    window.location = `${authUrl}?client_id=${clientId}&allow_sing_up=false&scope=repo`;
  };

  return isLoggedIn
    ? (
    <div className="item">
      <div className="ui red button" onClick={signOut}>
        <i className="white close icon"></i>
        Sign Out
      </div>
    </div>
      )
    : (
    <div className="item">
      <div className="ui purple button" onClick={requestAuth}>
        <i className="white github icon link"></i>
        Sign In
      </div>
    </div>
      );
};

GitHubOAuth.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired,
  getUserInfo: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
};

export default connect(mapStateToProps, {
  signOut, getUserInfo
})(GitHubOAuth);
