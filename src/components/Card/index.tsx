import React from 'react';
import { CardStyled, ImageStyle } from './Card.styles';

export interface CardI {
  image: string;
}

function Card({ image }: CardI) {
  return (
    <CardStyled>
      <div className="card-image">
        <ImageStyle>
          <img src={image} alt="card" className="object-cover rounded-xl" />
        </ImageStyle>
      </div>
    </CardStyled>
  );
}

export default Card;
