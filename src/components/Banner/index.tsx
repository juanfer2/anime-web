import React from 'react';
import Button from '@/components/Button';
import { Container } from './styles';

export interface BannerI {
  titleImage: string;
  image: string;
}

function Banner({ titleImage, image }: BannerI) {
  return (
    <Container>
      <div className="left-content">
        <div className="title-image-container">
          <img src={titleImage} alt="title-anime" />
        </div>

        <div className="watch">
          <Button size="large" type="primary">
            Ver ahora{' '}
          </Button>
        </div>
      </div>

      <div className="right-content">
        <img src={image} alt="anime-banner" />
      </div>
    </Container>
  );
}

export default Banner;
