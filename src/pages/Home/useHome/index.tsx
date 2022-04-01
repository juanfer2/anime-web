import { useEffect, useState } from 'react';
import { GenresI } from '@/models/anime';
import { getGenres } from '@/services/anime/anime_service';

export interface useGenres {
  loadingGenres: boolean;
  list: GenresI[];
  error: null | Error | unknown;
}

export const useHome = () => {
  const [genres, setGenres] = useState<useGenres>({
    loadingGenres: true,
    list: [],
    error: null
  });

  const genresList = async () => {
    try {
      const list: any = await getGenres({ limit: 2, page: 1 });
      setGenres({ ...genres, list: list.slice(0, 4), loadingGenres: false });
    } catch (error) {
      setGenres({ ...genres, list: [], loadingGenres: false, error });
    }
  };

  useEffect(() => {
    genresList();
  }, []);

  return { ...genres };
};
