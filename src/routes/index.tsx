import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '@pages/Home';
import Anime from '@pages/Anime';

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
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        {pages.map((component: any) => (
          <Route key={component.name} path={component.path} element={component.element} />
        ))}
      </Routes>
    </AnimatePresence>
  );
}

export default RoutesConfig;
