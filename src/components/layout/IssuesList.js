import React, { useEffect, useState } from 'react';
import github from '../../api/github';
import Issue from './Issue';
import PropTypes from 'prop-types';
import Paginator from '../layout/Paginator';
const ISSUES_PER_PAGE = 10;

const RepositoryIssuesList = ({ repo, page, filter }) => {
  const [issues, setIssues] = useState(null);
  useEffect(async () => {
    setIssues(null);
    const { data } = await github.get(
      `/repos/${repo.full_name}/issues`,
      {
        params: {
          per_page: ISSUES_PER_PAGE,
          page: page,
          state: 'open'
        }
      }
    );
    setIssues(data);
  }, [page, filter]);

  const renderIssues = () => {
    return issues.map((issue) => {
      return <Issue key={issue.id} issue={issue} />;
    });
  };

  if (issues && issues.length > 0) {
    return (
      <div className="issues list">
        <table className="ui selectable small table">
          <thead>
            <tr>
              <th className="one wide">
                <span>
                  <i className="exclamation circle icon"></i>
                  {repo.open_issues} Open
                </span>
              </th>
              <th className="three wide">
                <span>
                  {/* <i className="check icon"></i>
                4000 Closed */}
                </span>
              </th>
              <th className="two wide">
                Author <i className="dropdown icon"></i>
              </th>
              <th className="two wide">
                Label <i className="dropdown icon"></i>
              </th>
              <th className="two wide">
                Projects <i className="dropdown icon"></i>
              </th>
              <th className="two wide">
                Milestones <i className="dropdown icon"></i>
              </th>
              <th className="two wide">
                Assignee <i className="dropdown icon"></i>
              </th>
              <th className="two wide">
                Sort <i className="dropdown icon"></i>
              </th>
            </tr>
          </thead>
          <tbody>{issues ? renderIssues() : null}</tbody>
        </table>
        <Paginator
          currentPage={page}
          total={Math.ceil(repo.open_issues / ISSUES_PER_PAGE)}
          baseURL={`/${repo.full_name}/issues?q=${filter}`}
          param="page"
        />
      </div>
    );
  } else if (issues && issues.length === 0) {
    return (
      <div className="ui center aligned segment" style={{ minHeight: '300px', paddingTop: '50px' }}>
        <i className="circle exclamation icon big"></i>
        <h2 className="header">Welcome to issues!</h2>
        <p style={{ fontSize: '16px', padding: '0 200px' }}>
          Issues are used to track todos, bugs, feature requests, and more. As
          issues are created, they’ll appear here in a searchable and filterable
          list. To get started, you should create an issue.
        </p>
      </div>
    );
  } else {
    return 'Loading...';
  }
};

RepositoryIssuesList.propTypes = {
  repo: PropTypes.object.isRequired,
  page: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired
};

export default RepositoryIssuesList;
