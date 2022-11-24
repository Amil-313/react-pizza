import './App.scss';

import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Header from './Header/Header';
import Busket from './Busket/Busket';
import Empty from './Busket/Empty';
import Home from './Main/Home';
import NotFound from './NotFount/NotFound';


function App() {

  const [search, setSearch] = React.useState('');

  return (
    <div className="App">

      <Header 
      setSearch={setSearch}
       />

      <div className="container">
        <Routes>

          <Route path='/' element={<Home
          search={search} 
          />} />
          <Route path='/busket' element={<Busket />} />
          
          {/* <Empty /> */}
          <Route path='*' element={<NotFound />} />
          
        </Routes>
      </div>

    </div>
  );
}

export default App;
