import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import history from '../history';
import github from '../api/github';
import RepoResult from '../components/layout/RepoResult';

const Profile = ({ isLoggedIn, user }) => {
  const [repos, setRepos] = useState([]);
  useEffect(async () => {
    const token = localStorage.getItem('token');
    if (!isLoggedIn && !token) {
      history.push('/');
    }
    const { data } = await github.get('/user/repos', {
      params: {
        visibility: 'owner'
      }
    });
    setRepos(data);
  }, []);

  const renderRepos = () => {
    return repos.map((repo) => {
      return <RepoResult key={repo.id} repo={repo} />;
    });
  };
  return isLoggedIn
    ? (
    <div className="ui container route">
      <div className="ui grid">
        <div className="column four wide">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="ui circular image"
          />
          <div className="ui grid" style={{ marginTop: '16px' }}>
            <div className="row">
              <h2>{user.name}</h2>
            <div className="row">
              <p>{user.login}</p>
              <p>{user.bio}</p>
            </div>
            </div>
            <div className="row">
              <div className="column">
                <p><i className="users icon"></i> {user.followers} followers . {user.following} following .{' '}</p>
                <p><i className="outline building icon"></i> {user.company}</p>
                <p><i className="map marker alternate icon"></i> {user.location}</p>
                <p><i className="twitter icon"></i> @{user.twitter_username} </p>
              </div>
            </div>
          </div>
        </div>
        <div className="column twelve wide">
          <h3 className="header">
            <i className="github icon"></i>
            Repositories
          </h3>
          <div className="ui celled list">
            {repos.length > 0 ? renderRepos() : null}
          </div>
        </div>
      </div>
    </div>
      )
    : null;
};

Profile.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user
  };
};

export default connect(mapStateToProps, {})(Profile);
