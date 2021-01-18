import React from 'react';
import PropTypes from 'prop-types';

const IssueDisclaimer = ({ repo }) => {
  return (
    <div className="ui center aligned segment">
      <h4>
        👋Want to contribute to {repo.owner.login}/{repo.name}?
      </h4>
      <p>
        If you have a bug or an idea, read the
        {' '}
        {/* <a href={`https://github.com/${repo.owner.login}/${repo.name}/blob/main/CONTRIBUTING.md`}> */}
          contributing guidelines
        {/* </a> */}
        {' '}
        before opening an issue.
      </p>
    </div>
  );
};

IssueDisclaimer.propTypes = {
  repo: PropTypes.object
};

export default IssueDisclaimer;
