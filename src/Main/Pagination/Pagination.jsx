import React from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';

import pagination from './Pagination.module.scss';
import { setPage } from '../../Redux/Slices/filterSlice';

function Pagination() {
  
  const dispatch = useDispatch(); 

  return (
    <ReactPaginate
        className={pagination.main}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => dispatch(setPage(e.selected + 1))}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage = {useSelector((state) => state.filterPizza.page) - 1}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
  )
}

export default Pagination;