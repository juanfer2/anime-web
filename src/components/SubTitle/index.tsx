import React from 'react';
import { SubTitleStyled } from "./Subtitle.styles"; 

export interface SubTitleI {
  subtitle: string;
}

function SubTitle({subtitle}: SubTitleI) {
  return (
    <SubTitleStyled>{subtitle}</SubTitleStyled>
  );
}

export default SubTitle;
