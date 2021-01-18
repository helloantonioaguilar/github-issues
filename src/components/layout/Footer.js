import React from 'react';
// import PropTypes from 'prop-types';

const Footer = (props) => {
  return (
    <div className="ui container footer">
      <div className="ui divider"></div>
      <div className="ui grid">
        <div className="column two wide">© 2021 GitHub, Inc.</div>
        <div className="center aligned column one wide">Terms</div>
        <div className="center aligned column one wide">Privacy</div>
        <div className="center aligned column one wide">Security</div>
        <div className="center aligned column one wide">Status</div>
        <div className="center aligned column one wide">Help</div>
        <div className="column three wide center aligned">
          <i className="github icon big link"></i>
        </div>
        <div className="center aligned column one wide">Contact</div>
        <div className="center aligned column one wide">Pricing</div>
        <div className="center aligned column one wide">API</div>
        <div className="center aligned column one wide">Training</div>
        <div className="center aligned column one wide">Blog</div>
        <div className="center aligned column one wide">About</div>
      </div>
    </div>
  );
};

// Footer.propTypes = {

// };

export default Footer;
