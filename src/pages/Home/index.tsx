import React from 'react';
import Card from '@components/Card';
import TitleImage from '@assets/images/black-clover-title.png';
import ImageAnime from '@assets/images/black-clover.png';
import Banner from '@components/Banner';

function Home() {
  return (
    <div>
      <Banner titleImage={TitleImage} image={ImageAnime} />

      <div className="">
        <Card
          image="https://cdn.myanimelist.net/images/anime/1974/111954l.webp"
          title="Connected"
        />
        <Card image="https://cdn.myanimelist.net/images/anime/1974/111954l.jpg" title="Connected" />
      </div>
    </div>
  );
}

export default Home;
