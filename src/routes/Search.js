import React, { useEffect, useState } from 'react';
import useQuery from '../hooks/useQuery';
import github from '../api/github';
import RepoResult from '../components/layout/RepoResult';
import history from '../history';
import Paginator from '../components/layout/Paginator';
// import PropTypes from 'prop-types';

const REPOS_PER_PAGE = 10;

const Search = props => {
  const query = useQuery();
  const q = query.get('q');
  const page = Number(query.get('page')) || 1;
  const [repos, setRepos] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

  const searchRepos = async () => {
    setLoading(true);
    if (q) {
      const {
        data: { total_count: totalCount, items }
      } = await github.get('/search/repositories', {
        params: { q: q, per_page: REPOS_PER_PAGE, page }
      });
      setRepos(items);
      setCount(totalCount);
      setLoading(false);
      setTotalPages(Math.ceil(totalCount / REPOS_PER_PAGE));
    } else {
      history.push('/');
    }
  };
  useEffect(() => {
    searchRepos();
  }, [q, page]);

  const renderRepos = () => {
    return repos.map((repo) => {
      return <RepoResult key={repo.id} repo={repo} />;
    });
  };

  return (
    <div className="ui container route">
      {!loading ? <h3>{count} repository results</h3> : null}
      <div className="ui celled list">
        {repos && !loading ? renderRepos() : 'Loading...'}
      </div>
      {!loading && repos.length > 0 && totalPages > 1
        ? <Paginator
        total={totalPages > 100 ? 100 : totalPages}
        currentPage={page}
        baseURL={`/search?q=${q}`}
        param="page"
      />
        : null}
    </div>
  );
};

Search.propTypes = {
};

export default Search;
