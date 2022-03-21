import React from 'react';
import styled from 'styled-components';

const ImageStyle = styled.image`
  // max-width: 200px;
  // min-height: 300px;
  // overflow: hidden;

  img {
    width: 200px;
    height: 300px;
    object-fit: cover;
  }
`;

const CardStyled = styled.div`
  width: 200px;
  height: 300px;
`

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
