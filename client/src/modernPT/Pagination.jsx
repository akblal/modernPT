import React, { useState, useEffect } from 'react';
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

const Pagination = ({ notesPerPage, totalNotes, paginate, currentPage }) => {

  const pageNumbers = [];

  for  (let i = 1; i <= Math.ceil(totalNotes /  notesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        <li className='page-item'>
          {currentPage > 1 ?
            <a onClick= {() => paginate(currentPage - 1)} href='!#' className='page-link center-arrow'>
              <HiArrowSmLeft />
            </a> :
            <a  href='!#' className='page-link center-arrow hide-arrow'>
              <HiArrowSmLeft />
            </a>
          }
        </li>

        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className={ number === currentPage ? 'page-link bold-text' : 'page-link'}>
              {number}
            </a>
          </li>
        ))}

        <li className='page-item'>

        </li>
        {currentPage < Math.ceil(totalNotes /  notesPerPage)  ?
          <a onClick= {currentPage < Math.ceil(totalNotes /  notesPerPage) ? () => paginate(currentPage + 1) : null} href='!#' className='page-link center-arrow'>
              <HiArrowSmRight />
          </a> :
          <a href='!#' className='page-link center-arrow hide-arrow'>
            <HiArrowSmRight />
          </a>
          }
      </ul>
  </nav>
  )
}

export default Pagination