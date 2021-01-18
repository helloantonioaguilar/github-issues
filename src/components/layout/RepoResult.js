import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';

const RepoSearch = ({ repo }) => {
  return (
    <div className="item">
      <h4>
        <i className="book icon"></i>
        {/* <a href="#">{repo.full_name}</a> */}
        <Link to={`/${repo.owner.login}/${repo.name}/issues?q=is:open+is:issue`}>
          {repo.full_name}
        </Link>
      </h4>
      {repo.description
        ? (<p>
        {(repo.description).substr(0, 128)}
        {(repo.description).length > 128 ? '...' : ''}
      </p>)
        : null}
      <p>
        {repo.stargazers_count > 0
          ? (<span className="repo result info">
          <i className="outline star icon"></i>
          {repo.stargazers_count}
        </span>)
          : null}
        {repo.language
          ? (<span className="repo result info">
          <i className="small circle icon" style={{ color: '#1040DD' }}></i>
          {repo.language}
        </span>)
          : null}
      </p>
      <p style={{ color: 'gray', fontStyle: 'italic' }}>
        Updated on <Moment format="MMMM DD, YYYY">{repo.updated_at}</Moment>
      </p>
    </div>
  );
};

RepoSearch.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoSearch;
