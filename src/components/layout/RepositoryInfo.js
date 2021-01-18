import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import githubScrap from '../../api/github-scrap';

const RepositoryInfo = ({ repo }) => {
  const [contributors, setContributors] = useState([]);
  const [contributorsCount, setContributorsCount] = useState(0);
  const [dependentsCount, setDependentsCount] = useState(0);
  const [dependents, setDependents] = useState([]);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars

  useEffect(async () => {
    setLoading(true);
    const { data } = await githubScrap.get('/github', {
      params: {
        repo: repo.full_name
      }
    });
    setContributors(data.contributors);
    setContributorsCount(data.contributors_count);
    setDependents(data.dependents);
    setDependentsCount(data.dependents_count);
    setLoading(false);
  }, []);

  return (
    !loading
      ? (<div className="ui grid center aligned" style={{ marginTop: '8px' }}>
      {dependentsCount > 0
        ? (<div className="column eight wide">
        <h3 className="header">
          Used by
          <div className="ui label">{dependentsCount}</div>
        </h3>
        {dependents.map((i, j) => {
          return (
              <span key={i.owner}>
                <img
                  className="ui avatar image"
                  src={i.img}
                  alt={i.owner}
                  title={i.owner}
                />
              </span>
          );
        })}
      </div>)
        : null}
      <div className="column eight wide">
        <h3 className="header">
          Contributors
          <div className="ui label">{contributorsCount}</div>
        </h3>
        <div className="contributor avatar">
          {contributors.map((i, j) => {
            return (
              <span key={i.owner}>
                <img
                  className="ui avatar image"
                  src={i.img}
                  alt={i.owner}
                  title={i.owner}
                />
              </span>
            );
          })}
        </div>
      </div>
    </div>)
      : null
  );
};

RepositoryInfo.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepositoryInfo;
