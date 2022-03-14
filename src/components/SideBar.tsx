import React, { FC, useContext } from 'react';
import '../styles/SideBar.scss';
import { SortContext } from '../context';

const SideBar: FC = () => {
  const { setSort } = useContext(SortContext);
  return (
    <div className='sideBar'>
      <div>Сортировка</div>
      <button
        className='btn sideBar__btn'
        onClick={() => setSort(['company', 'name'])}
      >
        по городу
      </button>
      <button
        className='btn sideBar__btn'
        onClick={() => setSort(['address', 'city'])}
      >
        по компании
      </button>
    </div>
  );
};

export default SideBar;
