import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '@components/Card';
import { CarrouselStyled } from './Carrousel.styles';
import { AnimeI } from '@/models/anime';

export interface CarrouselI {}

const listItems = [
  {
    id: 1,
    name: 'card1',
    component: (
      <Card
        image="https://cdn.myanimelist.net/images/anime/1347/117616l.jpg"
        // title="Connected"
      />
    )
  },
  {
    id: 2,
    name: 'card2',
    component: (
      <Card
        image="https://cdn.myanimelist.net/images/anime/1446/118840l.jpg"
        // title="Connected"
      />
    )
  },
  {
    id: 3,
    name: 'card3',
    component: (
      <Card
        image="https://cdn.myanimelist.net/images/anime/1106/111620l.jpg"
        // title="Connected"
      />
    )
  },
  {
    id: 4,
    name: 'card4',
    component: (
      <Card
        image="https://cdn.myanimelist.net/images/anime/1671/120628l.jpg"
        // title="Connected"
      />
    )
  },
  {
    id: 5,
    name: 'card5',
    component: (
      <Card
        image="https://cdn.myanimelist.net/images/anime/1671/120628l.jpg"
        // title="Connected"
      />
    )
  },
  {
    id: 6,
    name: 'card6',
    component: (
      <Card
        image="https://cdn.myanimelist.net/images/anime/1671/120628l.jpg"
        // title="Connected"
      />
    )
  },
  {
    id: 7,
    name: 'card7',
    component: (
      <Card
        image="https://cdn.myanimelist.net/images/anime/1671/120628l.jpg"
        // title="Connected"
      />
    )
  },
  {
    id: 8,
    name: 'card8',
    component: (
      <Card
        image="https://cdn.myanimelist.net/images/anime/1671/120628l.jpg"
        // title="Connected"
      />
    )
  },
  {
    id: 9,
    name: 'card9',
    component: (
      <Card
        image="https://cdn.myanimelist.net/images/anime/1671/120628l.jpg"
        // title="Connected"
      />
    )
  },
  {
    id: 10,
    name: 'card10',
    component: (
      <Card
        image="https://cdn.myanimelist.net/images/anime/1974/111954l.jpg"
        // title="Connected"
      />
    )
  }
];

function Carrousel({ animes }: { animes: any }) {
  return (
    <CarrouselStyled>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 0
          },
          // when window width is >= 640px
          620: {
            slidesPerView: 2,
            spaceBetween: 5
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 5
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 10
          }
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
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
      </Swiper>
    </CarrouselStyled>
  );
}

export default Carrousel;
