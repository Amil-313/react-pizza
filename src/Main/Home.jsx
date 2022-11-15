import React from 'react'

import Categories from '../Categories/Categories';
import Sort from '../Sort/Sort';
import Main from '../Main/Main';

function Home() {
    
  let [pizza, getPizza] = React.useState([]);
  let [loading, setLoading] = React.useState(true);
  let [activeSort, setActiveSort] = React.useState(
    {name: "популярности", sortProperty: 'rating'}
  );
  let [openPopap, setOpenPopap] = React.useState(false);
  let [activeCategories, setActiveCategories] = React.useState(0);

  let clickPopap = () => {
    setOpenPopap(!openPopap);
  }
  let chooseSort = (n) => {
    setActiveSort(n);
    setOpenPopap(!openPopap);
  } 
  let chooseCategories = (i) => {
    setActiveCategories(i);
  }


  React.useEffect(() => {async function funFetch() {
    setLoading(true);
    await fetch(`https://636f3b22bb9cf402c8129fa2.mockapi.io/pizza?${activeCategories > 0 ? `category=${activeCategories}` : ''}&sortBy=${activeSort.sortProperty}&order=desc`).then(
      (res) => {return res.json()}).then((json) => getPizza(json));
      setLoading(false);
  }
  funFetch();
  window.scrollTo(0, 0);
}, [activeCategories, activeSort]);

  return (
    <>
    
    <div className="search_categories">
          <Categories
          chooseCategories={chooseCategories}
          activeCategories={activeCategories}
           />
          <Sort 
          clickPopap ={clickPopap}
          chooseSort={chooseSort}
          activeSort={activeSort}
          openPopap={openPopap}
           />
        </div>
        <Main 
        loading = {loading}
        pizza={pizza}
         />

    </>
  )
}

export default Home;