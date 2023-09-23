import { Genre } from "./useGenres";
import useHttp from "./useHttp";

export interface Platform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

export interface Game {
  id: number;
  name: string;
  released: string;
  background_image: string;
  rating: number;
  rating_top: number;
  parent_platforms: Platform[];
  platforms: Platform[];
  metacritic: number;
}

const useGames = (genre: Genre | null) =>
  useHttp<Game>(
    "games",
    {
      params: {
        genres: genre?.slug,
      },
    },
    [genre]
  );

export default useGames;
