import React from 'react';
import Logo from '@assets/images/logo.png';
import { LoadingStyled } from './Loading.styles';
import AnimationPage from '../AnimationPage';

/*
const boxAnimation = {
  key: 'box',
  initial: {
    y: '50%',
    opacity: 0,
    scale: 0.5
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1
  },
  exit: {
    y: '50%',
    opacity: 0,
    transition: {
      duration: 0.5
    }
  },
  transition: {
    duration: 1,
    ease: 'easeOut'
  }
};
*/

function Loading() {
  return (
    <AnimationPage>
      <LoadingStyled>
        <img src={Logo} alt="logo" />
        <div className="charge-container">
          <div className="charge-content" />
        </div>
      </LoadingStyled>
    </AnimationPage>
  );
}

export default Loading;
