import React from 'react';
import { ButtonStyled } from './Button.styles';
import { useButton } from './useButton'

export interface ButtonI {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  type?: 'primary' | 'secondary' | 'success' | 'danger' | 'default';
}

function Button({ children, size, type }: ButtonI) {
  const { sizeButton, typeButton, rounded, outline } = useButton({size, type})

  return (
    <ButtonStyled typeColor={typeButton} >
      <button
        type="button"
        className={ `${sizeButton} ${typeButton} ${rounded} ${outline}`}
      > 
        {children}
      </button>
    </ButtonStyled>
  );
}

Button.defaultProps = {
  size: 'medium',
  type: 'default'
};

export default Button;
