import React from 'react'

const Pagination = ({ elemPerPage, totalElem, paginate, currentPage }) => {
  const pageNamber = [];
  for (let i = 1; i <= Math.ceil(totalElem / elemPerPage); i++) {
    pageNamber.push(i);
  }
  return (
    <div className="pagination">
      {pageNamber.map((number) => (
        <span key={number} style={{ marginLeft: 10 }}>
          <a href="!#" className={number === currentPage ? 'active': ''} onClick={() => paginate(number)}>
            {number}
          </a>
        </span>
      ))}
    </div>
  );
};

export default Pagination
