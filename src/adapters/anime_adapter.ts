import { EndpointGenre, GenresI } from '@/models/anime';

export const genresAdapter = (genre: EndpointGenre) => {
  const formattedGenre: GenresI = {
    id: genre.mal_id,
    name: genre.name,
    url: genre.url,
    count: genre.count
  };

  return formattedGenre;
};
