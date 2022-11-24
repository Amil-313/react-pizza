import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addBusketPizza } from '../Redux/Slices/busketSlice';


export const typesPizza = ["тонкое", "традиционное"];

function Carditem({item}) {

    const dispatch = useDispatch();
    const { busketPizza } = useSelector((state) => state.busketPizza);

    const countInBusket = busketPizza.filter((busketItem) => busketItem.name === item.name).reduce((sum, pre) => {return sum + pre.count}, 0);
    const inBusket = busketPizza.some((busketItem) => busketItem.name === item.name);
    
    const [activeType, setActiveType] = React.useState(0);
    const [activeSize, setActiveSize] =React.useState(0);
    const typeRef = React.useRef();

    

    const chooseType = (i) => {
        setActiveType(i);
    }
    const chooseSize = (i) => {
        setActiveSize(i);
    }

    const clickAddBusketPizza = () => {
        const itemBusket = {
            ...item,
            type: activeType,
            size: activeSize,
            count: 1
        };
        dispatch(addBusketPizza(itemBusket));
    };

  return (
    <>
        <div className='item'>
            <img src={item.img} alt="pizza" />
            <h2>{item.name}</h2>
            <div className="search_igredients">
                <ul>
                    
                    {item.types.map((type, i) => <li onClick={() => chooseType(i)} ref={typeRef} key={i} className = {activeType === i ? "active" : ""} >{typesPizza[type]}</li>)}

                </ul>
                <ul>
                   
                    {item.sizes.map((size, i) => <li onClick={() => chooseSize(i)} key={i} className = {activeSize === i ? "active" : ""} >{size} см.</li>)}

                </ul>
            </div>
            <div className="add">
                <h1>от {item.price} ₽</h1>
                <div onClick={clickAddBusketPizza} className="btn_add">
                    <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"/>
                    </svg>
                    <p>Добавить</p>
                     {inBusket && <span>{countInBusket}</span>} 
                </div>
            </div>
        </div>
    </>
  )
}

export default  Carditem;