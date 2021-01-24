import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const RepositoryHeader = ({ repo }) => {
  return (
    <div>
      <div className="ui list">
        <div className="item">
          <div className="right floated content">
          {/* Watchers Button */}
          <div className="ui labeled button">
              <div className="ui button tiny">
                <i className="eye icon"></i>
                <span>
                  <i className="caret down icon"></i>
                </span>
                Watch
              </div>
              <a href="#" className="ui basic label">
                {repo.subscribers_count}
              </a>
            </div>
          {/* Stars Button */}
          <div className="ui labeled button">
              <div className="ui button tiny">
                <i className="star outline icon"></i>
                Star
              </div>
              <a href="#" className="ui basic label">
                {repo.stargazers_count}
              </a>
            </div>
            {/* Fork Button */}
            <div className="ui labeled button">
              <div className="ui button tiny">
                <i className="fork icon"></i>
                Fork
              </div>
              <a href="#" className="ui basic label">
                {repo.forks}
              </a>
            </div>
          </div>
          <h3 className="header">
            <i className="icon book"></i>
            <Link to={`/search?q=${repo.owner.login}/`}>
              {repo.owner.login}
            </Link>
            /
            <a href="#">{repo.name}</a>
            {repo.private ? <div className="ui label">Private</div> : null}
          </h3>
        </div>
      </div>
      <div className="repo ui secondary pointing menu">
        <div className="item">
          <i className="code icon"></i>
          Code
        </div>
        <div className="item active">
          <i className="exclamation circle icon"></i>
          Issues
          <div className="ui label">{repo.open_issues}</div>
        </div>
        <div className="item">
          <i className="fork icon"></i>
          Pull requests
        </div>
        <div className="item">
          <i className="play circle outline icon"></i>
          Actions
        </div>
        <div className="item">
          <i className="gitter icon"></i>
          Projects
        </div>
        <div className="item">
          <i className="leanpub icon"></i>
          Wiki
        </div>
        <div className="item">
          <i className="shield icon"></i>
          Security
        </div>
        <div className="item">
          <i className="chart line icon"></i>
          Insights
        </div>
      </div>
    </div>
  );
};

RepositoryHeader.propTypes = {
  repo: PropTypes.object
};

export default RepositoryHeader;
