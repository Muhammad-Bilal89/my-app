import React, { useState,useEffect } from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [currentPage, setCurrentPage] = useState(1);
  return (
    <nav>
      <ul className='pagination'>
      <li><button onClick={()=>{
        currentPage>1 ? paginate(currentPage-1) : paginate(currentPage)
        currentPage>1 ? setCurrentPage(currentPage-1): setCurrentPage(currentPage)
      } } className="btn btn-outline-info">Previous</button></li>
        {pageNumbers.map(number => (          
            <li key={number} className='page-item'>
            <a onClick={() =>{ paginate(number); setCurrentPage(number)}} href='#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
        <li><button onClick={()=>{
        currentPage< pageNumbers.length ? paginate(currentPage+1) : paginate(currentPage)
        currentPage< pageNumbers.length ? setCurrentPage(currentPage+1): setCurrentPage(currentPage)
      } } className="btn btn-outline-info">Next</button></li>
      </ul>
    </nav>
  );
};

export default Pagination;