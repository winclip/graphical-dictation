/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 15 }}>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a onClick={() => paginate(number)} href="#" className="page-link">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
