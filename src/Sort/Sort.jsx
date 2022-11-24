import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setActiveSort } from '../Redux/Slices/filterSlice';

import './Sort.scss';

export const popapList = [
  {name: "популярности", sortProperty: 'rating'},
  {name: "по цене", sortProperty: 'price'},
  {name: "по алфавиту", sortProperty: 'name'} 
];

 function Sort() {

  const dispatch = useDispatch();
  const activeSort = useSelector((state) => state.filterPizza.activeSort);

  const [openPopap, setOpenPopap] = React.useState(false);
  const sortRef = React.useRef();

  const clickPopap = () => setOpenPopap(!openPopap);
  const chooseSort = (n) => {
    dispatch(setActiveSort(n));
    setOpenPopap(!openPopap);
  };

  React.useEffect(() => {
    const closePopap = (event) => !event.path.includes(sortRef.current)&&setOpenPopap(false);
    document.body.addEventListener('click', closePopap);
    return () => document.body.removeEventListener('click', closePopap);
  }, []);

  return (
    <>
      <div ref={sortRef} className='sort'>
      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69076 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z" fill="#2C2C2C"/>
      </svg>
        <b>
          Cортировка по:
        </b>
        <span onClick={clickPopap}>{activeSort.name}</span>

        {openPopap &&  <ul>
          {popapList.map((item, i) => <li onClick={() => chooseSort(item)} className={activeSort === item ? "active" : ""} key={i}>{item.name}</li>)}
        </ul>
        }
       
      </div>
    </>
  )
}

export default Sort;