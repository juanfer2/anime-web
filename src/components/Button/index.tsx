import React, { MouseEventHandler } from 'react';
import { ButtonStyled } from './Button.styles';
import { useButton } from './useButton';

export interface ButtonI {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size?: 'small' | 'medium' | 'large' | 'big';
  type?: 'primary' | 'secondary' | 'success' | 'danger' | 'light';
  typeHtml?: "button" | "submit" | "reset";
  rounded?: boolean;
  outline?: boolean;
}

function Button({ children, size, type, onClick, typeHtml, rounded, outline }: ButtonI) {
  const { 
    sizeButton, typeButton, typeHtmlButton, roundedButton, outlineButton 
  } = useButton({ size, type, typeHtml, rounded, outline });

  return (
    <ButtonStyled typeColor={typeButton} size={size} outline={outline}>
      <button 
        onClick={onClick || (() => {})} 
        // eslint-disable-next-line react/button-has-type
        type={typeHtmlButton} 
        className={`${sizeButton} ${typeButton} ${roundedButton} ${outlineButton}`}>
        {children}
      </button>
    </ButtonStyled>
  );
}

Button.defaultProps = {
  onClick: () => {},
  size: 'medium',
  type: 'default',
  typeHtml: 'button',
  rounded: false,
  outline: true
};

export default Button;
