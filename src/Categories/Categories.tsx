import './Categories.scss';

import React from 'react';

type CategoryPropsType = {
  chooseCategories: (inx: number) => void;
  activeCategories: number;
}

const Categories: React.FC <CategoryPropsType> = ({chooseCategories, activeCategories}) => {

  const allCategories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];


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