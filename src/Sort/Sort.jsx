import React from 'react'

import './Sort.scss';

 function Sort() {
  return (
    <>
      <div className='sort'>
        <b>
          Cортировка по:
        </b>
        <select required='required'>
          <option value="">популярности</option>
          <option value="1">по цене</option>
          <option value="2">по алфавиту</option>
        </select>
      </div>
    </>
  )
}

export default Sort;