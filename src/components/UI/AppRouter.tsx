import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../../routes';

const AppRouter: FC = () => {
  return (
    <Routes>
      {routes.map(route => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </Routes>
  );
};

export default AppRouter;
