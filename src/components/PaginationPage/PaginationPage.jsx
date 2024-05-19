import React from 'react'
import '../../styles/pagination.css'

const PaginationPage = ({ totalPosts, postPerPage, setCurrentPage, currentPage }) => {
  let pages = [];

  for (let i = 1; i < Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className='pagination-main'>
      {pages.map((page, i) => (
        <button
          className={page === currentPage ? 'active' : ''}
          onClick={() => setCurrentPage(page)}
          key={i}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default PaginationPage;


