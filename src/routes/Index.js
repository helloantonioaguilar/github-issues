import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Index = () => {
  const history = useHistory();
  const [text, setText] = useState('');

  const search = (e) => {
    e.preventDefault();
    history.push(`/search?q=${text}`);
  };

  return (
    <div className="ui container route">
      <div className="ui grid center aligned">
        <div className="row">
          <i className="huge github icon"></i>
        </div>
        <div className="row">
          <h1 className="header">GitHub</h1>
        </div>
        <div className="row">
          <div className="column sixteen wide">
            <form onSubmit={search}>
              <div className="ui search fluid">
                <div className="ui icon input fluid">
                  <input
                    type="text"
                    className="prompt fluid"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                  <i className="search icon link" onClick={search}></i>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
