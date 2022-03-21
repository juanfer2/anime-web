import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '@components/Card';
import { CarrouselStyled } from './Carrousel.styles';

export interface CarrouselI {}

const listItems = [
  {
    name: 'card1',
    component: (
      <Card
        image="https://cdn.myanimelist.net/images/anime/1347/117616l.jpg"
        // title="Connected"
      />
    )
  },
  {
    name: 'card1',
    component: (
      <Card
        image="https://cdn.myanimelist.net/images/anime/1446/118840l.jpg"
        // title="Connected"
      />
    )
  },
  {
    name: 'card1',
    component: (
      <Card
        image="https://cdn.myanimelist.net/images/anime/1106/111620l.jpg"
        // title="Connected"
      />
    )
  },
  {
    name: 'card1',
    component: (
      <Card
        image="https://cdn.myanimelist.net/images/anime/1671/120628l.jpg"
        // title="Connected"
      />
    )
  },
  {
    name: 'card1',
    component: (
      <Card
        image="https://cdn.myanimelist.net/images/anime/1671/120628l.jpg"
        // title="Connected"
      />
    )
  },
  {
    name: 'card1',
    component: (
      <Card
        image="https://cdn.myanimelist.net/images/anime/1671/120628l.jpg"
        // title="Connected"
      />
    )
  },
  {
    name: 'card1',
    component: (
      <Card
        image="https://cdn.myanimelist.net/images/anime/1671/120628l.jpg"
        // title="Connected"
      />
    )
  },
  {
    name: 'card1',
    component: (
      <Card
        image="https://cdn.myanimelist.net/images/anime/1671/120628l.jpg"
        // title="Connected"
      />
    )
  },
  {
    name: 'card1',
    component: (
      <Card
        image="https://cdn.myanimelist.net/images/anime/1671/120628l.jpg"
        // title="Connected"
      />
    )
  },
  {
    name: 'card1',
    component: (
      <Card
        image="https://cdn.myanimelist.net/images/anime/1974/111954l.jpg"
        // title="Connected"
      />
    )
  }
];

function Carrousel() {
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
        {listItems &&
          listItems.map((item: any) => (
            <SwiperSlide key={item.name}> {item.component} </SwiperSlide>
          ))}
      </Swiper>
    </CarrouselStyled>
  );
}

export default Carrousel;
