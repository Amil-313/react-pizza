import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

function Header() {
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

                        <Link className="busket" to='/busket'>
                            <span>520 ₽</span>
                            <div>
                                <img src={ require("../Image/busket.svg").default} alt="busket" />
                                3
                            </div>
                        </Link>

                    </div>
                
            </header>
        </>
    )
}

export default Header;