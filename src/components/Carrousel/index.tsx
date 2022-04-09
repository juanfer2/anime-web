import React from 'react';
import { Swiper } from 'swiper/react';
import { CarrouselStyled } from './Carrousel.styles';

export interface CarrouselI {}

function Carrousel({ children }: { children: React.ReactNode }) {
  return (
    <CarrouselStyled>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 200
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 640px
          620: {
            slidesPerView: 1,
            spaceBetween: 20
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
        {children}
      </Swiper>
    </CarrouselStyled>
  );
}

export default Carrousel;
