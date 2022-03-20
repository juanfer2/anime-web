import React from 'react';
import styled from 'styled-components';

const ImageStyle = styled.div`
  max-width: 200px;
  min-height: 300px;
  overflow: hidden;

  img {
    width: 200px;
    height: 300px;
    object-fit: cover;
  }
`;

export interface CardI {
  image: string;
  title: string;
}

function Card({ image, title }: CardI) {
  return (
    <div className="card md">
      <div className="card-image">
        <ImageStyle>
          <img src={image} alt="card" className="object-cover rounded-xl" />
        </ImageStyle>
      </div>
      <div className="title">
        <h6 className="orange-custom">{title}</h6>
      </div>
    </div>
  );
}

export default Card;
