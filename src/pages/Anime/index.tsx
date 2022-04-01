import React from 'react';
import { AnimeStyled } from './Anime.styles';

export interface AnimeI {}

function Anime({}: AnimeI) {
  return <AnimeStyled>Anime</AnimeStyled>;
}

export default Anime;
