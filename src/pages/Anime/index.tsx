import React from 'react';
import AnimationPage from '@components/AnimationPage';
import { useParams } from "react-router-dom";
import Loading from '@components/Loading';
import Card from '@components/Card';
import { AnimeStyled } from './Anime.styles';
import { useAnime } from './useAnime';

function Anime() {
  const params = useParams();
  const animeId = params.id as string
  const id = parseInt(animeId, 10);
  const {anime, error, loading} = useAnime({id})

  if(loading) return <Loading/>
  if(error) return <>error</>

  console.log(anime);

  return (
    <AnimationPage>
      <AnimeStyled>
        <Card image={anime?.image?.imageUrl || ''} />
        <div className='content'>
          <div className="title">
            <h1>{anime?.title}</h1>
          </div>
          <div className="info">
            2021 | 16+ | temporada 1
          </div>
          <div className="description">
            {anime?.synopsis}
          </div>
        </div>
      </AnimeStyled>
    </AnimationPage>
  );
}

export default Anime;
