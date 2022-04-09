import { motion } from 'framer-motion';
import React from 'react';

export interface AnimationPageI {
  children: React.ReactNode;
}

const boxAnimation = {
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

function AnimationPage({ children }: AnimationPageI) {
  return <motion.div {...boxAnimation}>{children}</motion.div>;
}

export default AnimationPage;
