import { useEffect, useState } from 'react';
import { getAnimeByFilter } from '@services/anime/anime_service';

export interface UseAnimeFilterI {
  status: string;
}

export interface Payload {
  loading: boolean;
  list: any;
  error: null | Error | unknown;
}

export const useAnimeFilter = ({ status }: UseAnimeFilterI) => {
  const [anime, setAnime] = useState<Payload>({
    loading: true,
    list: [],
    error: null
  });

  const animeList = async () => {
    try {
      const list: any = await getAnimeByFilter({ status });
      setAnime({ ...anime, list, loading: false });
    } catch (error) {
      setAnime({ ...anime, list: [], loading: false, error });
    }
  };

  useEffect(() => {
    animeList();
  }, []);

  return {...anime}
};
