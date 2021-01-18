import React, { useEffect, useState, Fragment } from 'react';
import RepositoryHeader from '../components/layout/RepositoryHeader';
import IssuesControls from '../components/layout/IssuesControls';
import IssueDisclaimer from '../components/layout/IssueDisclaimer';
import IssuesList from '../components/layout/IssuesList';
import github from '../api/github';
import PropTypes from 'prop-types';
import useQuery from '../hooks/useQuery';
import RepositoryInfo from '../components/layout/RepositoryInfo';

const RepositoryIssues = ({ match }) => {
  const [repository, setRepository] = useState(null);
  const query = useQuery();
  const page = Number(query.get('page')) || 1;
  const filter = query.get('q') || 'is:open+is:issue';

  useEffect(async () => {
    const {
      params: { owner, repo }
    } = match;
    const { data } = await github.get(`/repos/${owner}/${repo}`);
    setRepository(data);
  }, []);

  return (
    <div className="ui container route">
      {repository
        ? (
        <Fragment>
          <RepositoryHeader repo={repository} />
          <RepositoryInfo repo={repository}/>
          <IssueDisclaimer repo={repository} />
          <IssuesControls repo={repository} />
          <IssuesList repo={repository} page={page} filter={filter} />
        </Fragment>
          )
        : null}
    </div>
  );
};

RepositoryIssues.propTypes = {
  match: PropTypes.object.isRequired
};

export default RepositoryIssues;
