import './App.scss';

import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Header from './Header/Header';
import Home from './Main/Home';
import { useSelector } from 'react-redux';
import { selectBusket } from './Redux/Slices/busketSlice';

const Busket = React.lazy(() => import( /* webpackChunkName: "Busket" */ './Busket/Busket'));
const Empty = React.lazy(() => import( /* webpackChunkName: "Empty" */ './Busket/Empty'));
const NotFound = React.lazy(() => import( /* webpackChunkName: "NotFound" */ './NotFount/NotFound'));

function App() {

  const [search, setSearch] = React.useState('');

  const { busketPizza } = useSelector(selectBusket);

  return (
    <div className="App">

      <Header 
      setSearch={setSearch}
       />

      <div className="container">
        
        <React.Suspense fallback = {<div>Идет загрузка...</div>}>
          <Routes>
            <Route path='/' element={<Home
            search={search} 
            />} />
            <>
              <Route path='/busket' element={busketPizza.length > 0 ? <Busket /> : <Empty />} />
              <Route path='*' element={<NotFound />} />
            </>
          </Routes>
        </React.Suspense>
      </div>

    </div>
  );
}

export default App;
