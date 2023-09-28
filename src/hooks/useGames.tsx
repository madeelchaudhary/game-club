import { GameQuery } from "../App";
import { useQuery } from "@tanstack/react-query";
import apiClient, { AxiosError } from "../services/api-client";

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
  useQuery<Game[], AxiosError, Game[], [string, GameQuery]>(
    ["games", query],
    async ({ queryKey }) => {
      const [, query] = queryKey;
      const params = {
        genres: query.genre?.id,
        parent_platforms: query.platform?.id,
        ordering: query.sort?.slug,
        search: query.search,
      };

      const res = await apiClient.get("games", { params });
      return res.data.results;
    },
    {
      staleTime: 1000 * 60, // 1 minute
      refetchOnWindowFocus: false,
    }
  );

export default useGames;
