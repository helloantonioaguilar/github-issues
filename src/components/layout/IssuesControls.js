import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import github from '../../api/github';

const RepositoryIssuesControls = ({ repo }) => {
  const [labelCount, setLabelCount] = useState(0);
  const [milestonesCount, setMilestonesCount] = useState(0);

  useEffect(async () => {
    const { data: labels } = await github.get(`/repos/${repo.owner.login}/${repo.name}/labels`);
    const { data: milestones } = await github.get(`/repos/${repo.owner.login}/${repo.name}/milestones`);
    setLabelCount(labels.length);
    setMilestonesCount(milestones.length);
  }, []);

  return (
    <div className="issues controls">
      <button className="ui right floated green button">New issue</button>
      <div className="ui right floated labeled button">
        <a href="#labels" className="ui button">
          <i className="tag icon"></i>
          Labels {`(${labelCount})`}
        </a>
        <div className="ui basic label">
          <a href="#milestones">
            <i className="map signs icon"></i>
            Milestones {`(${milestonesCount})`}
          </a>
        </div>
      </div>
      <form onSubmit={e => e.preventDefault()}>
      <div className="ui left labeled fluid input">
        <div className="ui dropdown label">
          <div className="text">Filters</div>
          <i className="dropdown icon"></i>
        </div>
        <input type="text" name="filter" id="filter"/>
      </div>
      </form>
    </div>
  );
};

RepositoryIssuesControls.propTypes = {
  repo: PropTypes.object
};

export default RepositoryIssuesControls;
