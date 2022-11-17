import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import Categories from '../Categories/Categories';
import Sort from '../Sort/Sort';
import Main from '../Main/Main';
import Pagination from './Pagination/Pagination';
import { setActiveCategories } from '../Redux/Slices/filterSlice';

function Home({search}) {

  let activeCategories = useSelector((state) => state.filterPizza.activeCategories);
  let dispatch = useDispatch();

    
  let [pizza, getPizza] = React.useState([]);
  let [loading, setLoading] = React.useState(true);
  let [activeSort, setActiveSort] = React.useState(
    {name: "популярности", sortProperty: 'rating'}
  );
  let [openPopap, setOpenPopap] = React.useState(false);
  let [page, setPage] = React.useState(1);

  let clickPopap = () => {
    setOpenPopap(!openPopap);
  }
  let chooseSort = (n) => {
    setActiveSort(n);
    setOpenPopap(!openPopap);
  } 
  let chooseCategories = (i) => {
    dispatch(setActiveCategories(i));
  }


  React.useEffect(() => {async function funFetch() {
    setLoading(true);
    await fetch(`https://636f3b22bb9cf402c8129fa2.mockapi.io/pizza?search=${search}&page=${page}&limit=${4}&${activeCategories > 0 ? `category=${activeCategories}` : ''}&sortBy=${activeSort.sortProperty}&order=desc`).then(
      (res) => {return res.json()}).then((json) => getPizza(json));
      setLoading(false);
  }
  funFetch();
  window.scrollTo(0, 0);
}, [activeCategories, activeSort, search, page]);

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

         <Pagination 
         setPage={setPage}
          />

    </>
  )
}

export default Home;