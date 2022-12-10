import React from 'react';
import qs from 'qs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Categories from '../Categories/Categories';
import Sort, { popapList } from '../Sort/Sort';
import Main from './Main';
import Pagination from './Pagination/Pagination';
import { ArgumentsFilterType, selectFilter, setActiveCategories, setFilter } from '../Redux/Slices/filterSlice';
import { fetchPizza } from '../Redux/Slices/pizzaSlice';
import { useDispatchApp } from '../Redux/store';

type HomeType = {
  search: string
}

const Home: React.FC <HomeType> = ({search}) => {

  const updatePage = React.useRef(false);

  const navigate = useNavigate();
  const dispatch = useDispatchApp();
  const { activeCategories, activeSort, page } = useSelector(selectFilter);
    

  const chooseCategories = (i: number) => {
    dispatch(setActiveCategories(i));
  };

  const fetchRequest = async () => {
    try {
      dispatch(
        fetchPizza({
        search,
        page,
        activeCategories,
        activeSort
      }));
    } catch (error) {
      console.log(error);
      alert('Произошла ошибка при загрузке пицц :(')
    }
  };
  const urlRequest = () => {
    const parameters = qs.parse(window.location.search.substring(1));
      const sort = popapList.find((item) => item.sortProperty === parameters.sortProperty);
      const argumentsFilter = { ...parameters, sort } as ArgumentsFilterType;
      sort &&
      dispatch(setFilter(argumentsFilter));
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
  } else {
    updatePage.current = false;
  }
  window.scrollTo(0, 0);
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
        <Main />

         <Pagination />

    </>
  )
}

export default Home;