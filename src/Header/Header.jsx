import debounce from 'lodash.debounce';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Header.scss';

function Header({setSearch}) {

    const inputRef = React.useRef();
    const [searchLokal, setSearchLokal] = React.useState('');

    const { totalPrice, busketPizza } = useSelector((state) => state.busketPizza);


    const clearInput = () => {
        setSearchLokal('');
        setSearch('');
        inputRef.current.focus();
    }

    const updateSearch = React.useCallback(debounce((value) => {
        setSearch(value);}, 500), [])

    const changeInput = (value) => {
        setSearchLokal(value);
        updateSearch(value);
    }

    return(
        <>
            <header>
                
                    <div className="header">
                        <Link to='/'>
                            <div className="logo">
                                <img src={ require("../Image/logo.svg").default} alt="logo" />
                                <div>
                                    <h1>REACT PIZZA</h1>
                                    <p>самая вкусная пицца во вселенной</p>
                                </div>
                            </div>
                        </Link>

                        <div className="search">
                            <svg className='search_icon' height="30px" viewBox="0 0 512 512" width="30px" xmlns="http://www.w3.org/2000/svg">
                                <path d="M448.3,424.7L335,311.3c20.8-26,33.3-59.1,33.3-95.1c0-84.1-68.1-152.2-152-152.2c-84,0-152,68.2-152,152.2  s68.1,152.2,152,152.2c36.2,0,69.4-12.7,95.5-33.8L425,448L448.3,424.7z M120.1,312.6c-25.7-25.7-39.8-59.9-39.8-96.3  s14.2-70.6,39.8-96.3S180,80,216.3,80c36.3,0,70.5,14.2,96.2,39.9s39.8,59.9,39.8,96.3s-14.2,70.6-39.8,96.3  c-25.7,25.7-59.9,39.9-96.2,39.9C180,352.5,145.8,338.3,120.1,312.6z"/>
                            </svg>
                            <input ref={inputRef} onChange={(event) => changeInput(event.target.value)} value={searchLokal} type="text" placeholder='Поиск пиццы...' />
                            {searchLokal && <svg onClick={clearInput} className='input_clear' height="20" viewBox="0 0 48 48" width="20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"/>
                                <path d="M0 0h48v48H0z" fill="none"/>
                            </svg>}
                        </div>

                        <Link className="busket" to='/busket'>
                            <span>{totalPrice} ₽</span>
                            <div>
                                <img src={ require("../Image/busket.svg").default} alt="busket" />
                                {busketPizza.reduce((sum, pre) => { return sum + pre.count}, 0)}
                            </div>
                        </Link>

                    </div>
                
            </header>
        </>
    )
}

export default Header;