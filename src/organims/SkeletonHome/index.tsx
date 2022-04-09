import React from 'react';
import { SkeletonHomeStyled } from './SkeletonHome.styles';

function SkeletonHome() {
  return (
    <SkeletonHomeStyled>
      <div className="banner-header" />
    </SkeletonHomeStyled>
  );
}

export default SkeletonHome;
