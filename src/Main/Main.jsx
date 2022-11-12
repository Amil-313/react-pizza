import React from 'react'
import Carditem from './Carditem';

import './Main.scss';

function Main(props) {
  return (
    <>
        <div>
            <h1>Все пиццы</h1>
            <div className="wrapper_card">

              {props.pizza.map((item) => <Carditem item={item} />)}

            </div>
        </div>
    </>
  )
}

export default Main;