import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './Busket.scss';
import Busketitem from './Busketitem';
import { clearBusketPizza, selectBusket } from '../Redux/Slices/busketSlice';


const Busket: React.FC = () => {
    const dispatch = useDispatch();
    const { busketPizza, totalPrice } = useSelector(selectBusket);

    const onClearBusketPizza = () => {
        window.confirm('Очистить карзину?') && dispatch(clearBusketPizza())
    };
    

  return (
    <>
        <div className='busket_main'>
            <div className="busket_products">

                <div className="busket_head">
                    <div className="busket_name">
                        <img src="../Image/busketicon.svg" alt="busket" />
                        <h1>Корзина</h1>
                    </div>
                    <div onClick={() => onClearBusketPizza()} className="busket_clear">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 5H4.16667H17.5" strokeWidth="1.2" strokeLinecap="round" stroke-linejoin="round"/>
                            <path d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z" strokeWidth="1.2" strokeLinecap="round" stroke-linejoin="round"/>
                            <path d="M8.33337 9.16667V14.1667" strokeWidth="1.2" strokeLinecap="round" stroke-linejoin="round"/>
                            <path d="M11.6666 9.16667V14.1667" strokeWidth="1.2" strokeLinecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>Очистить корзину</span>
                    </div>
                </div>

                {busketPizza.map((item: any, i: number) => <Busketitem key={i} item={item} />)}

            </div>
            

            <div className="add_sum">
                <p>Всего пицц: <strong>{busketPizza.reduce((sum: number, pre: any) => { return sum + pre.count}, 0)} шт.</strong></p>
                <p>Сумма заказа: <b>{totalPrice} ₽</b></p>
            </div>

            <div className="busket_btn">
                <Link to='/'>
                    <button className='busket_btn_back'>
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 13L1 6.93015L6.86175 1" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round"/>
                        </svg>
                        Вернуться назад
                    </button>
                </Link>
                <button className='busket_btn_pay'>Оплатить сейчас</button>
            </div>

        </div>
    </>
  )
}

export default Busket;