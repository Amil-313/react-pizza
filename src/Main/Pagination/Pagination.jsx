import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';

import pagination from './Pagination.module.scss';
import { setPage } from '../../Redux/Slices/filterSlice';

function Pagination() {
  
  let dispatch = useDispatch(); 

  return (
    <ReactPaginate
        className={pagination.main}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => dispatch(setPage(e.selected + 1))}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
  )
}

export default Pagination;