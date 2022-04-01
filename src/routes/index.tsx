import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import Anime from '@/pages/Anime';

interface PageI {
  name: string;
  path: string;
  element: React.ReactNode;
}

function RoutesConfig() {
  const pages: PageI[] = [
    {
      name: 'home',
      path: '/',
      element: <Home />
    },
    {
      name: 'anime',
      path: '/anime/:id',
      element: <Anime />
    },
    {
      name: 'notFount',
      path: '*',
      element: <>not found</>
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
