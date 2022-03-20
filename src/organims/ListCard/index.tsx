import React from 'react';
import { Container } from './styles';

export interface ListCardI {
  children: React.ReactNode;
}

function ListCard({ children }: ListCardI) {
  return <Container>{children}</Container>;
}

export default ListCard;
