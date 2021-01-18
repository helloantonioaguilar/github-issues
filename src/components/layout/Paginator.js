import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Paginator = ({ total, currentPage, baseURL, param }) => {
  const previous = currentPage - 1;
  const next = currentPage + 1;

  const renderLinks = (page, total) => {
    let links = [];
    links.push(1);
    links.push(2);
    links.push(total);
    links.push(total - 1);
    links.push(page);
    for (let i = 1; i <= 2; i++) {
      links.push(page - i);
      links.push(page + i);
    }
    links = [...new Set(links.filter(i => (i > 0 && i <= total)).sort((a, b) => a - b))];
    return links.map((link, i, arr) => {
      return (
        <Fragment key={link}>
          <Link
            className={`${link === page ? 'active' : ''} item`}
          to={`${baseURL}&${param}=${link}`}
          >
            {link}
          </Link>
          {!arr[i + 1] || (arr[i + 1] - arr[i] === 1)
            ? null
            : (
            <div className="disable item">...</div>
              )}
        </Fragment>
      );
    });
  };
  return (
    <div className="ui centered grid pagination">
      <div className="center aligned column">
        <div className="ui pagination menu">
          <Link
            className={`${previous <= 0 ? 'disabled' : ''} item`}
            to={`${baseURL}&${param}=${previous}`}
          >
            Previous
          </Link>
          {renderLinks(currentPage, total)}
          <Link
            className={`${next > total ? 'disabled' : ''} item`}
            to={`${baseURL}&${param}=${next}`}
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};

Paginator.propTypes = {
  total: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  baseURL: PropTypes.string.isRequired,
  param: PropTypes.string.isRequired
};

export default Paginator;
