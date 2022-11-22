import React from 'react';
import axios from 'axios';
import qs from 'qs';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Categories from '../Categories/Categories';
import Sort, { popapList } from '../Sort/Sort';
import Main from '../Main/Main';
import Pagination from './Pagination/Pagination';
import { setActiveCategories, setFilter } from '../Redux/Slices/filterSlice';

function Home({search}) {

  let navigate = useNavigate();
  let dispatch = useDispatch();
  const updatePage = React.useRef(false);
  const isMounted = React.useRef(false);
  let { activeCategories, activeSort, page } = useSelector((state) => state.filterPizza);
    
  let [pizza, getPizza] = React.useState([]);
  let [loading, setLoading] = React.useState(true);

  let chooseCategories = (i) => {
    dispatch(setActiveCategories(i));
  };

  React.useEffect(() => {
    if (window.location.search) {
      const parameters = qs.parse(window.location.search.substring(1));
      const sort = popapList.find((item) => item.sortProperty === parameters.sortProperty);
      dispatch(setFilter({ 
        ...parameters, sort, 
      }));
      updatePage.current = true;
    }
  }, []);

  React.useEffect(() => {
    setLoading(true);

    if (updatePage.current === false) {
    axios.get(`https://636f3b22bb9cf402c8129fa2.mockapi.io/pizza?` +
    `search=${search}` +
    `&page=${page}` +
    `&limit=${4}`+ 
    `&${activeCategories > 0 ? `category=${activeCategories}` : ''}` +
    `&sortBy=${activeSort.sortProperty}&order=desc`)
      .then((res) => getPizza(res.data));
      setLoading(false);
    }

    updatePage.current = false

  window.scrollTo(0, 0);
}, [activeCategories, activeSort.sortProperty, search, page]);

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        category: activeCategories,
        sortProperty: activeSort.sortProperty,
        page,
      });
      navigate(`?${queryString}`)
    }
    isMounted.current = true;
  }, [activeCategories, activeSort, page])

  return (
    <>
    
    <div className="search_categories">
          <Categories
          chooseCategories={chooseCategories}
          activeCategories={activeCategories}
           />
          <Sort />
        </div>
        <Main 
        loading = {loading}
        pizza={pizza}
         />

         <Pagination />

    </>
  )
}

export default Home;