import './Categories.scss';

import React from 'react';

function Categories({chooseCategories, activeCategories}) {

  let allCategories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <>
        <div className='category'>
            <ul className='categories'>

              {allCategories.map((item, i) => <li key = {i} onClick={() => chooseCategories(i)} className={activeCategories === i ? 'active' : ''}>{item}</li>)}

            </ul>
        </div>
    </>
  )
}

export default Categories;