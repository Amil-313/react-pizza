import React from 'react';
import { useDispatch } from 'react-redux';

import { typesPizza } from '../Main/Carditem';
import { addBusketPizza, removeBusketPizza, decreaseBusketPizza } from '../Redux/Slices/busketSlice';

type BusketItemType = {
    item: {   
    parId: string;
    img: string;
    name: string;
    types: number[];
    sizes: number[];
    price: number;
    rating: number;
    count: number;
    type: number;
    size: number;
}}

const Busketitem: React.FC <BusketItemType> = ({item}) => {
    

    const dispatch = useDispatch();

    const clickAddBusketPizza = () => {
        dispatch(addBusketPizza(item));
    };
    const clickRemoveBusketPizza = () => {
        dispatch(removeBusketPizza(item));
    };
    const clickDecreaseBusketPizza = () => {
        dispatch(decreaseBusketPizza(item));
    }


  return (
    <>
        <div className="add_pizza">
                    <div className="add_name">
                        <img src={item.img} alt={item.name} />
                        <div>
                            <h2>{item.name}</h2>
                            <p>{typesPizza[item.type]}, {item.sizes[item.size]} см.</p>
                        </div>
                    </div>
                    <div className='pizza_adjust'>
                        <div className="pizza_amount">
                            <svg onClick={clickDecreaseBusketPizza} width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16" r="15" stroke="#FE5F1E" strokeWidth="2"/>
                                <path d="M15.0402 15.04H19.8402C20.3704 15.04 20.8002 15.4698 20.8002 16C20.8002 16.5302 20.3704 16.96 19.8402 16.96H15.0402H12.1602C11.63 16.96 11.2002 16.5302 11.2002 16C11.2002 15.4698 11.63 15.04 12.1602 15.04H15.0402Z"/>
                            </svg>
                            <b>{item.count}</b>
                            <svg onClick={clickAddBusketPizza} width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16" r="15" stroke="#FE5F1E" strokeWidth="2"/>
                                <path d="M19.8402 15.04H16.9602V12.16C16.9602 11.6299 16.5304 11.2 16.0002 11.2C15.47 11.2 15.0402 11.6299 15.0402 12.16V15.04H12.1602C11.63 15.04 11.2002 15.4699 11.2002 16C11.2002 16.5302 11.63 16.96 12.1602 16.96H15.0402V19.84C15.0402 20.3702 15.47 20.8 16.0002 20.8C16.5304 20.8 16.9602 20.3702 16.9602 19.84V16.96H19.8402C20.3704 16.96 20.8002 16.5302 20.8002 16C20.8002 15.4699 20.3704 15.04 19.8402 15.04Z"/>
                            </svg>

                        </div>
                        <strong>{item.price * item.count} ₽</strong>
                        <svg onClick={clickRemoveBusketPizza} className='delete_product' width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="15" fill="white" strokeWidth="2"/>
                            <path d="M19.7479 17.9557L17.4993 15.7071L19.7479 13.4585C20.1618 13.0446 20.1618 12.3734 19.7479 11.9595C19.334 11.5455 18.6628 11.5455 18.2488 11.9595L16.0002 14.2081L13.7516 11.9595C13.3377 11.5455 12.6665 11.5455 12.2526 11.9595C11.8386 12.3734 11.8386 13.0446 12.2526 13.4585L14.5012 15.7071L12.2526 17.9557C11.8386 18.3696 11.8386 19.0409 12.2526 19.4548C12.6665 19.8687 13.3377 19.8687 13.7516 19.4548L16.0002 17.2062L18.2488 19.4548C18.6628 19.8687 19.334 19.8687 19.7479 19.4548C20.1618 19.0409 20.1618 18.3696 19.7479 17.9557Z" />
                        </svg>
                    </div>
                </div>
    </>
  )
}

export default  Busketitem;