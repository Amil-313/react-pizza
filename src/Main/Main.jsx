import React from 'react'
import Carditem from './Carditem';


import './Main.scss';
import Skeleton from './Skeleton';

function Main(props) {
  return (
    <>
        <div>
            <h1>Все пиццы</h1>
            <div className="wrapper_card">

              {props.loading ? 
              [...Array(8)].map((a, i) => <Skeleton key={i} />) :
              props.pizza.map((item) => <Carditem ket={props.parId} item={item} />) }


            </div>
        </div>
    </>
  )
}

export default Main;