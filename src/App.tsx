import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import SideBar from './components/SideBar';
import AppRouter from './components/UI/AppRouter';
import { SortContext } from './context';
import './styles/App.scss';

const App = () => {
  const [sort, setSort] = useState(['']);
  return (
    <SortContext.Provider
      value={{
        sort,
        setSort,
      }}
    >
      <BrowserRouter>
        <div className='app'>
          <SideBar />
          <AppRouter />
        </div>
      </BrowserRouter>
    </SortContext.Provider>
  );
};

export default App;
