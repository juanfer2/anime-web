import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LoadingStyled } from './Loading.styles';
import Logo from '@/assets/images/logo.png';

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
      duration: 5
    }
  },
  transition: {
    duration: 1,
    ease: 'easeOut'
  }
};

function Loading({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence initial={false}>
      {visible && (
        <motion.div {...boxAnimation}>
          <LoadingStyled>
            <img src={Logo} alt="logo" />
            <div className="charge-container">
              <div className="charge-content" />
            </div>
          </LoadingStyled>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loading;
