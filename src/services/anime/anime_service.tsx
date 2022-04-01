import axios, { AxiosResponse } from 'axios';
import { GenresI, EndpointGenre } from '@/models/anime';
import { genresAdapter } from '@/adapters/anime_adapter';

const BASE_URL = 'https://api.jikan.moe/v4';

export interface PaginationI {
  limit?: number;
  page?: number;
}

export const getGenres = async ({
  limit = 10,
  page = 1
}: PaginationI): Promise<GenresI[] | Error> => {
  const response: AxiosResponse = await axios.get(
    `${BASE_URL}/genres/anime?limit=${limit}&page=${page}`
  );

  const data: GenresI[] = response.data.data.map((genre: EndpointGenre) => genresAdapter(genre));
  return data;
};
