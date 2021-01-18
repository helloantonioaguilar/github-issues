import React from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const NavBar = props => {
  return (
    <div className="ui top stackable attached menu inverted">
      <div className="ui icon item">
        <Link to="/">
          <i className="github icon big link"></i>
        </Link>
      </div>
      <SearchBar />
      <div className="item"><a href="#">Pull requests</a></div>
      <div className="item"><a href="#">Issues</a></div>
      <div className="item"><a href="#">Marketplace</a></div>
      <div className="item"><a href="#">Explore</a></div>
      <div className="right menu">
        <div className="icon item">
          <i className="bell outline icon"></i>
        </div>
        <div className="ui dropdown icon item">
          <i className="icon plus"></i>
          <span><i className="icon caret down"></i></span>
        </div>
        <div className="ui dropdown icon item">
          <i className="user icon"></i>
          <span><i className="icon caret down"></i></span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
