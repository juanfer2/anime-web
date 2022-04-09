import { useEffect, useState } from 'react';
import { getAnimeById } from '@services/anime/anime_service';
import { AnimeI } from '@models/anime';

export interface Payload<T> {
  loading: boolean;
  anime: T | null;
  error: any;
}

export const useAnime = ({id}: {id: number}) => {
  const [getAnime, setGetAnime] = useState<Payload<AnimeI>>({
    loading: true,
    anime: null,
    error: null
  });

  const animeList = async () => {
    try {
      const anime: AnimeI = await getAnimeById({ id }) as AnimeI;
      setGetAnime({ ...getAnime, anime, loading: false });
    } catch (error) {
      setGetAnime({ ...getAnime, anime: null, loading: false, error });
    }
  };

  useEffect(() => {
    animeList();
  }, []);

  return {...getAnime}
};
