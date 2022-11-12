import React from 'react';
import './Busket.scss';

function Empty() {
  return (
    <>
            <div className="empty">
                <h1>Корзина пустая</h1>
                <p>Вероятней всего, вы не заказывали ещё пиццу.</p>
                <p>Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
                <img src={require('../Image/empty.png')} alt="empty" />
                <div className="btn_empty">Вернуться назад</div>
            </div>
    </>
  )
}

export default Empty;