import React from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import GitHubOAuth from './GitHubOAuth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const NavBar = ({ isLoggedIn }) => {
  return (
    <div className="ui top stackable attached menu inverted">
      <div className="ui icon item">
        <Link to="/">
          <i className="github icon big link"></i>
        </Link>
      </div>
      <SearchBar />
      {isLoggedIn
        ? (<div className="item">
        <Link to="/profile">
          Profile
        </Link>
      </div>)
        : null}
      {/* <div className="item"><a href="#">Pull requests</a></div> */}
      <div className="item"><a href="#">Issues</a></div>
      <div className="item"><a href="#">Marketplace</a></div>
      <div className="item"><a href="#">Explore</a></div>
      <div className="right menu">
        <GitHubOAuth />
      </div>
    </div>
  );
};

NavBar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
};

export default connect(mapStateToProps, {})(NavBar);
