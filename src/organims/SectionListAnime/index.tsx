import React from 'react';
import SubTitle from '@components/SubTitle';
import Carrousel from '@components/Carrousel';
import { SectionListAnimeStyled } from './SectionListAnime.styles';
import { AnimeI } from '@models/anime';

export interface SectionListAnimeI {
  subtitle: string;
  animes: AnimeI[];
}

function SectionListAnime({ subtitle, animes }: SectionListAnimeI) {
  return (
    <SectionListAnimeStyled>
      <SubTitle subtitle={subtitle} />
      <Carrousel animes={animes} />
    </SectionListAnimeStyled>
  );
}

export default SectionListAnime;
