import useHttp from "./useHttp";
import { GameQuery } from "../App";

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

const useGames = (query: GameQuery) =>
  useHttp<Game>(
    "games",
    {
      params: {
        genres: query.genre?.id,
        parent_platforms: query.platform?.id,
        ordering: query.sort?.slug,
        search: query.search,
      },
    },
    [query]
  );

export default useGames;
