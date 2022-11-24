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

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const updatePage = React.useRef(false);
  const { activeCategories, activeSort, page } = useSelector((state) => state.filterPizza);
    
  const [pizza, getPizza] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const chooseCategories = (i) => {
    dispatch(setActiveCategories(i));
  };

  const fetchRequest = async () => {
    setLoading(true);
    await axios.get(`https://636f3b22bb9cf402c8129fa2.mockapi.io/pizza?` +
    `search=${search}` +
    `&page=${page}` +
    `&limit=${4}`+ 
    `&${activeCategories > 0 ? `category=${activeCategories}` : ''}` +
    `&sortBy=${activeSort.sortProperty}&order=desc`)
    .then((res) => getPizza(res.data));
    setLoading(false);
  };
  const urlRequest = () => {
    const parameters = qs.parse(window.location.search.substring(1));
      const sort = popapList.find((item) => item.sortProperty === parameters.sortProperty);
      dispatch(setFilter({ 
        ...parameters, sort, 
      }));
  };
  const urlSend = () => {
    const queryString = qs.stringify({
      category: activeCategories,
      sortProperty: activeSort.sortProperty,
      page,
    });
    navigate(`?${queryString}`)
  };

  React.useEffect(() => {
    if(window.location.search) {
      window.location.search === '?category=0&sortProperty=rating&page=1' ?
      fetchRequest() :
      urlRequest();
    } else {
    fetchRequest();
    }
    updatePage.current = true;
}, []);

  React.useEffect(() => {
     if (!updatePage.current) {
      fetchRequest();
      urlSend();
      window.scrollTo(0, 0);
  } else {
    updatePage.current = false;
  }
  }, [activeCategories, activeSort.sortProperty, search, page]);

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