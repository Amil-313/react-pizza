import React from 'react';
import ReactPaginate from 'react-paginate';

import pagination from './Pagination.module.scss';

function Pagination({ setPage }) {
  return (
    <ReactPaginate
        className={pagination.main}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => setPage(e.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
  )
}

export default Pagination;