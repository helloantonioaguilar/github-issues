import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Issue = ({ issue }) => {
  return (
    <tr>
      <td className="two wide">
        <i className="green exclamation circle icon"></i>
      </td>
      <td colSpan="4">
        <div className="content">
          <h5>{issue.title}</h5>
          <div className="sub header">
            #{issue.number} opened {moment(issue.created_at).fromNow()} ago by {issue.user.login}
          </div>
        </div>
      </td>
      <td className="center aligned">
      </td>
      <td className="center aligned">
        {issue.assignee
          ? (
          <img
            className="ui issue avatar image"
            src={issue.assignee.avatar_url}
            alt={issue.assignee.login}
            title={issue.assignee.login}
          />
            )
          : null}
      </td>
      <td className="center aligned comments cell">
        <i className="grey outline comment icon"></i>
        {issue.comments}
      </td>
    </tr>
  );
};

Issue.propTypes = {
  issue: PropTypes.object.isRequired
};

export default Issue;
