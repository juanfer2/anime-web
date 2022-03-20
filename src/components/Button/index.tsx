import React from 'react';
import { Container } from './styles';

export interface ButtonI {
  children: React.ReactNode;
  size: 'small' | 'medium' | 'large';
  type: 'primary' | 'secondary' | 'success' | 'danger';
}

const buttonSizes = {
  small: 'w-24',
  medium: 'w-50',
  large: 'w-100'
};

function Button({ children, size, type }: ButtonI) {
  console.log(buttonSizes[size]);

  return (
    <Container>
      <button
        type="button"
        className={`${buttonSizes[size]} ${type} custon-button button-size outline outline-offset-2
          outline-2 rounded-md`}
      >
        {children}
      </button>
    </Container>
  );
}

export default Button;
