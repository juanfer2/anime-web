import React from 'react';
import { Container } from './styles';

export interface LayoutI {
  children: React.ReactNode;
}

function Layout({ children }: LayoutI) {
  return <Container>{children}</Container>;
}

export default Layout;
