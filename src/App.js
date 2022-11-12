import './App.scss';


import React from 'react';

import Header from './Header/Header';
import Categories from './Categories/Categories';
import Sort from './Sort/Sort';
import Main from './Main/Main';
import Busket from './Busket/Busket';
import Empty from './Busket/Empty';


function App() {

  let [pizza, getPizza] = React.useState([]);

  React.useEffect(() => {
    fetch('https://636f3b22bb9cf402c8129fa2.mockapi.io/pizza').then(
      (res) => {return res.json()}).then((json) => getPizza(json));
  }, []);

  return (
    <div className="App">

      <Header />

      <div className="container">
        <div className="search_categories">
          <Categories />
          <Sort />
        </div>
        <Main pizza={pizza} />
        {/* <Busket />
        <Empty /> */}
      </div>

    </div>
  );
}

export default App;
