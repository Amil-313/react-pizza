import React from 'react';

import './Busket.scss';

function Busket() {
  return (
    <>
        <div className='busket_main'>
            <div className="busket_products">

                <div className="busket_head">
                    <div className="busket_name">
                        <img src={require("../Image/busketicon.svg").default} alt="busket" />
                        <h1>Корзина</h1>
                    </div>
                    <div className="busket_clear">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 5H4.16667H17.5" strokeWidth="1.2" strokeLinecap="round" stroke-linejoin="round"/>
                            <path d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z" strokeWidth="1.2" strokeLinecap="round" stroke-linejoin="round"/>
                            <path d="M8.33337 9.16667V14.1667" strokeWidth="1.2" strokeLinecap="round" stroke-linejoin="round"/>
                            <path d="M11.6666 9.16667V14.1667" strokeWidth="1.2" strokeLinecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>Очистить корзину</span>
                    </div>
                </div>

                <div className="add_pizza">
                    <div className="add_name">
                        <img src="Img/pizza1.png" alt="pizza" />
                        <div>
                            <h2>Сырный цыпленок</h2>
                            <p>тонкое тесто, 26 см.</p>
                        </div>
                    </div>
                    <div className="pizza_amount">
                        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="15" stroke="#FE5F1E" strokeWidth="2"/>
                            <path d="M15.0402 15.04H19.8402C20.3704 15.04 20.8002 15.4698 20.8002 16C20.8002 16.5302 20.3704 16.96 19.8402 16.96H15.0402H12.1602C11.63 16.96 11.2002 16.5302 11.2002 16C11.2002 15.4698 11.63 15.04 12.1602 15.04H15.0402Z"/>
                        </svg>
                        <b>2</b>
                        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="15" stroke="#FE5F1E" strokeWidth="2"/>
                            <path d="M19.8402 15.04H16.9602V12.16C16.9602 11.6299 16.5304 11.2 16.0002 11.2C15.47 11.2 15.0402 11.6299 15.0402 12.16V15.04H12.1602C11.63 15.04 11.2002 15.4699 11.2002 16C11.2002 16.5302 11.63 16.96 12.1602 16.96H15.0402V19.84C15.0402 20.3702 15.47 20.8 16.0002 20.8C16.5304 20.8 16.9602 20.3702 16.9602 19.84V16.96H19.8402C20.3704 16.96 20.8002 16.5302 20.8002 16C20.8002 15.4699 20.3704 15.04 19.8402 15.04Z"/>
                        </svg>

                    </div>
                    <strong>770 ₽</strong>
                    <svg className='delete_product' width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="15" fill="white" strokeWidth="2"/>
                        <path d="M19.7479 17.9557L17.4993 15.7071L19.7479 13.4585C20.1618 13.0446 20.1618 12.3734 19.7479 11.9595C19.334 11.5455 18.6628 11.5455 18.2488 11.9595L16.0002 14.2081L13.7516 11.9595C13.3377 11.5455 12.6665 11.5455 12.2526 11.9595C11.8386 12.3734 11.8386 13.0446 12.2526 13.4585L14.5012 15.7071L12.2526 17.9557C11.8386 18.3696 11.8386 19.0409 12.2526 19.4548C12.6665 19.8687 13.3377 19.8687 13.7516 19.4548L16.0002 17.2062L18.2488 19.4548C18.6628 19.8687 19.334 19.8687 19.7479 19.4548C20.1618 19.0409 20.1618 18.3696 19.7479 17.9557Z" />
                    </svg>
                </div>

            </div>
            

            <div className="add_sum">
                <p>Всего пицц: <strong>3 шт.</strong></p>
                <p>Сумма заказа: <b>900 ₽</b></p>
            </div>

            <div className="busket_btn">
                <button className='busket_btn_back'>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 13L1 6.93015L6.86175 1" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round"/>
                    </svg>
                    Вернуться назад</button>
                <button className='busket_btn_pay'>Оплатить сейчас</button>
            </div>

        </div>
    </>
  )
}

export default Busket;