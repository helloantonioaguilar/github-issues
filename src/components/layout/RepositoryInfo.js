import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import server from '../../api/server';
import github from '../../api/github';

const RepositoryInfo = ({ repo }) => {
  const [contributors, setContributors] = useState([]);
  const [stargazers, setStargazers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    setLoading(true);
    const params = { per_page: 11 };
    const { data: contrib } = await github.get(`repos/${repo.full_name}/contributors`, { params });
    const { data: stars } = await github.get(`repos/${repo.full_name}/stargazers`, { params });
    setContributors(contrib || []);
    setStargazers(stars || []);
    setLoading(false);
  }, []);

  return !loading
    ? (
    <div className="ui grid center aligned" style={{ marginTop: '8px' }}>
      <div className="column eight wide">
        <h3 className="header">
          Stargazers
        </h3>
        {stargazers.map(i => {
          return (
            <span key={i.id}>
              <img
                className="ui avatar image"
                src={i.avatar_url}
                alt={i.login}
                title={i.login}
              />
            </span>
          );
        })}
      </div>
      <div className="column eight wide">
        <h3 className="header">
          Contributors
        </h3>
        <div className="contributor avatar">
          {contributors.map(i => {
            return (
              <span key={i.id}>
                <img
                  className="ui avatar image"
                  src={i.avatar_url}
                  alt={i.login}
                  title={i.login}
                />
              </span>
            );
          })}
        </div>
      </div>
    </div>
      )
    : null;
};

RepositoryInfo.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepositoryInfo;
