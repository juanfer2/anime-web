import {
  EndpointGenre,
  GenresI,
  EndPointImageI,
  AnimeI,
  ImageI,
  EndpointAnimeI
} from '@models/anime';

export const genresAdapter = (genre: EndpointGenre) => {
  const formattedGenre: GenresI = {
    id: genre.mal_id,
    name: genre.name,
    url: genre.url,
    count: genre.count
  };

  return formattedGenre;
};

export const imageAdapter = (image: EndPointImageI) => {
  const formattedImage: ImageI = {
    imageUrl: image.image_url,
    largeImageUrl: image.large_image_url,
    smallImageUrl: image.small_image_url
  };

  return formattedImage;
};

export const animeAdapter = (anime: EndpointAnimeI) => {
  const formatAnime: AnimeI = {
    id: anime.mal_id,
    title: anime.title,
    synopsis: anime.synopsis,
    status: anime.status,
    type: anime.type,
    image: imageAdapter(anime.images.jpg)
  };

  return formatAnime;
};
