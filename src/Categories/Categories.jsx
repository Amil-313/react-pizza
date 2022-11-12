import './Categories.scss';

import React from 'react';

function Categories() {

  let [activeCategories, setActiveCategories] = React.useState(0);
  let allCategories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];


  let chooseCategories = (i) => {
    setActiveCategories(i);
  }

  return (
    <>
        <div>
            <ul className='categories'>

              {allCategories.map((item, index) => <li onClick={() => chooseCategories(index)} className={activeCategories === index ? 'active' : ''}>{item}</li>)}

            </ul>
        </div>
    </>
  )
}

export default Categories;