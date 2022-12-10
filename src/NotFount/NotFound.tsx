import React from 'react'
import notFound from './NotFound.module.scss';

const NotFound: React.FC = () => {
  return (
    <>
        <div className={notFound.head}>
            <h1> Код #404 </h1>
            <p>Страница отсутствует</p>
        </div>
    </>
  )
}

export default  NotFound;