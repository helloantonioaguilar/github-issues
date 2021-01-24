import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useQuery } from '../hooks/useQuery';
import PropTypes from 'prop-types';
import history from '../history';
import {
  signIn
} from '../actions';

const Login = ({ signIn, isLoggedIn }) => {
  const query = useQuery();
  const code = query.get('code');
  useEffect(() => {
    if (!code) {
      history.push('/');
    } else if (isLoggedIn) {
      history.push('/profile');
    } else {
      signIn(code);
    }
  }, []);

  return (
    <div className="ui container route">
      Signing In ...
    </div>
  );
};

Login.propTypes = {
  signIn: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
};

export default connect(mapStateToProps, {
  signIn
})(Login);
