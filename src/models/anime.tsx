export interface EndpointGenre {
  mal_id: number;
  name: string;
  url: string;
  count: number;
}

export interface GenresI {
  id: number;
  name: string;
  url: string;
  count: number;
}

export interface EndPointImageI {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface ImageI {
  imageUrl: string;
  smallImageUrl: string;
  largeImageUrl: string;
}

export interface EndpointAnimeI {
  mal_id: number;
  title: string;
  type: string;
  status: string;
  synopsis: string;
  images: any;
}
export interface AnimeI {
  id: number;
  title: string;
  type: string;
  status: string;
  synopsis: string;
  image: ImageI;
}
