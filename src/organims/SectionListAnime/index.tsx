import React from 'react';
import SubTitle from '@/components/SubTitle';
import Carrousel from '@/components/Carrousel';
import { SectionListAnimeStyled } from './SectionListAnime.styles';

export interface SectionListAnimeI {}

function SectionListAnime() {
  return (
    <SectionListAnimeStyled>
      <SubTitle subtitle="Recommendeds" />
      <Carrousel />
    </SectionListAnimeStyled>
  );
}

export default SectionListAnime;
