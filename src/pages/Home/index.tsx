import React from 'react';
// import Card from '@components/Card';
import TitleImage from '@assets/images/black-clover-title.png';
import ImageAnime from '@assets/images/black-clover.png';
import Banner from '@components/Banner';
import SectionListAnime from '@organims/SectionListAnime';
// import ListCard from '@organims/ListCard';

function Home() {
  return (
    <div>
      <Banner titleImage={TitleImage} image={ImageAnime} />
      <SectionListAnime />
      <SectionListAnime />
      <SectionListAnime />
      <SectionListAnime />

      {/*
      <ListCard>
        <Card image="https://cdn.myanimelist.net/images/anime/1347/117616l.jpg" title="Connected" />
        <Card image="https://cdn.myanimelist.net/images/anime/1446/118840l.jpg" title="Connected" />
        <Card image="https://cdn.myanimelist.net/images/anime/1576/119361l.jpg" title="Connected" />
        <Card image="https://cdn.myanimelist.net/images/anime/1106/111620l.jpg" title="Connected" />
        <Card image="https://cdn.myanimelist.net/images/anime/1671/120628l.jpg" title="Connected" />
        <Card image="https://cdn.myanimelist.net/images/anime/1974/111954l.jpg" title="Connected" />
      </ListCard>
      */}
    </div>
  );
}

export default Home;
