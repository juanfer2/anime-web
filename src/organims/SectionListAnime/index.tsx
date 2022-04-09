import React from 'react';
import SubTitle from '@components/SubTitle';
import Carrousel from '@components/Carrousel';
import { AnimeI } from '@models/anime';
import { SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import Card from '@components/Card';
import { SectionListAnimeStyled } from './SectionListAnime.styles';

export interface SectionListAnimeI {
  subtitle: string;
  animes: AnimeI[];
}

function SectionListAnime({ subtitle, animes }: SectionListAnimeI) {
  return (
    <SectionListAnimeStyled>
      <SubTitle subtitle={subtitle} />
      <Carrousel>
        
        {animes &&
            animes.map((item: AnimeI) => (
              <SwiperSlide key={item.id}>
                {' '}
                <Link to={`anime/${item.id}`}>
                  <Card
                    image={item.image.largeImageUrl}
                    // title="Connected"
                  />
                </Link>
              </SwiperSlide>
            ))}
      </Carrousel>

    </SectionListAnimeStyled>
  );
}

export default SectionListAnime;
