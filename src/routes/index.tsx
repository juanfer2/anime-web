import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '@pages/Home';

interface PageI {
  name: string;
  path: string;
  element: React.ReactNode;
}

function RoutesConfig() {
  const pages: PageI[] = [
    {
      name: 'register',
      path: '/',
      element: <Home />
    }
  ];

  return (
    <Routes>
      {pages.map((component: any) => (
        <Route key={component.name} path={component.path} element={component.element} />
      ))}
    </Routes>
  );
}

export default RoutesConfig;
