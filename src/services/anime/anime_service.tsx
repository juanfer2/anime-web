import axios, { AxiosResponse } from 'axios';
import { animeAdapter, genresAdapter } from '@adapters/anime_adapter';
import { GenresI, EndpointGenre, AnimeI, EndpointAnimeI } from '@models/anime';

const BASE_URL = 'https://api.jikan.moe/v4';

export interface PaginationI {
  limit?: number;
  page?: number;
}

export interface AnimeFilterI {
  status?: string;
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

export const getAnimeByFilter = async ({ status }: AnimeFilterI): Promise<AnimeI[] | Error> => {
  const response: AxiosResponse = await axios.get(`${BASE_URL}/anime?status=${status}`);
  const data: AnimeI[] = response.data.data.map((anime: EndpointAnimeI) => animeAdapter(anime));

  return data;
};

export const getAnimeById = async ({ id }: {id: number}): Promise<AnimeI | Error> => {
  const response: AxiosResponse = await axios.get(`${BASE_URL}/anime/${id}`);
  const data: AnimeI = animeAdapter(response.data.data);

  return data;
};

