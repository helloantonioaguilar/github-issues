import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import PropTypes from 'prop-types';

const SearchBar = props => {
  const history = useHistory();
  const [text, setText] = useState('');

  const search = (e) => {
    e.preventDefault();
    history.push(`/search?q=${text}`);
  };

  return (
    <div className="item">
      <form onSubmit={search}>
      <div className="ui search" >
        <div className="ui transparent icon input inverted search-bar">
          <input
            className="prompt"
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="Search repository..."
          />
          <i className="search link icon inverted" onClick={search}></i>
        </div>
      </div>
      </form>
    </div>
  );
};

SearchBar.propTypes = {};

export default SearchBar;
