import React from 'react'
import Carditem from './Carditem';
import { useSelector } from 'react-redux';

import './Main.scss';
import Skeleton from './Skeleton';
import { selectPizza } from '../Redux/Slices/pizzaSlice';

const Main: React.FC = () => {
  const { loading } = useSelector(selectPizza);

  const { pizza } = useSelector(selectPizza);

  return (
    <>
        <div className='main'>
            <h1>Все пиццы</h1>
            <div className="wrapper_card">
              <>
                {loading === 'error' && alert('Произошла ошибка при загрузке пицц :(')}
              </>
              {loading === 'loading' ? 
              [...Array(8)].map((a, i) => <Skeleton key={i} />) :
              pizza.map((item: any) => <Carditem key={item.parId} item={item} />) }


            </div>

        </div>
    </>
  )
}

export default Main;