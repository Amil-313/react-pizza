import React from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';

import pagination from './Pagination.module.scss';
import { selectFilter, setPage } from '../../Redux/Slices/filterSlice';

const Pagination: React.FC = () => {
  
  const dispatch = useDispatch(); 
  const { page } = useSelector(selectFilter);

  return (
    <ReactPaginate
        className={pagination.main}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => dispatch(setPage(e.selected + 1))}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage = {page - 1}
        previousLabel="<"
      />
  )
}

export default Pagination;