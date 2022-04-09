import React from 'react';
// import Card from '@components/Card';
import TitleImage from '@assets/images/black-clover-title.png';
import ImageAnime from '@assets/images/black-clover.png';
import SectionListAnime from '@organims/SectionListAnime';
import Categories from '@organims/Categories';
import Banner from '@components/Banner';
import Loading from '@components/Loading';
import AnimationPage from '@components/AnimationPage';
import { useHome } from './useHome';
import { HomeStyled } from './Home.styles';
import { useAnimeFilter } from '@/hooks/useAnimeFilter';

function Home() {
  const { loadingGenres, error, list } = useHome();
  const { list: upComingAnimes } = useAnimeFilter({status: 'upcoming'});

  if (loadingGenres) return <Loading />;
  if (error) return <>error</>;

  return (
    <AnimationPage>
      <HomeStyled>
        <Banner titleImage={TitleImage} image={ImageAnime} />

        {list && <Categories subtitle="Categories" categories={list} />}
        <SectionListAnime subtitle='Upcoming' animes={upComingAnimes} />
        <SectionListAnime subtitle='Upcoming' animes={upComingAnimes} />
      </HomeStyled>
    </AnimationPage>
  );
}

export default Home;
