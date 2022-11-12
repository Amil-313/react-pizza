import './Header.scss';

function Header() {
    return(
        <>
            <header>
                
                    <div className="header">
                        <div className="logo">
                            <img src={ require("../Image/logo.svg").default} alt="logo" />
                            <div>
                                <h1>REACT PIZZA</h1>
                                <p>самая вкусная пицца во вселенной</p>
                            </div>
                        </div>
                        <a className="busket" href='./#'>
                            <span>520 ₽</span>
                            <div>
                                <img src={ require("../Image/busket.svg").default} alt="busket" />
                                3
                            </div>
                        </a>
                    </div>
                
            </header>
        </>
    )
}

export default Header;