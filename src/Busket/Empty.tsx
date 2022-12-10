import React from 'react';
import './Busket.scss';
import { Link } from 'react-router-dom';

function Empty() {
  return (
    <>
            <div className="empty">
                <h1>Корзина пустая</h1>
                <p>Вероятней всего, вы не заказывали ещё пиццу.</p>
                <p>Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
                <img src='../Image/empty.png' alt="empty" />
                <Link to='/'>
                  <div className="btn_empty">Вернуться назад</div>
                </Link>
            </div>
    </>
  )
}

export default Empty;