import { GameQuery } from "../App";
import { useInfiniteQuery } from "@tanstack/react-query";
import { gamesService, AxiosError, APIResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  released: string;
  background_image: string;
  rating: number;
  rating_top: number;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (query: GameQuery) =>
  useInfiniteQuery<
    APIResponse<Game>,
    AxiosError,
    APIResponse<Game>,
    [string, GameQuery]
  >(
    ["games", query],
    async ({ queryKey, pageParam }) => {
      const [, query] = queryKey;
      const params = {
        genres: query.genre?.id,
        parent_platforms: query.platform?.id,
        ordering: query.sort?.slug,
        search: query.search,
        page: pageParam || 1,
      };

      const data = await gamesService.get<Game>(params);
      return data;
    },
    {
      staleTime: 1000 * 60, // 1 minute
      refetchOnWindowFocus: false,
      getNextPageParam: (lastPage) => {
        if (lastPage.next) {
          const url = new URL(lastPage.next);
          const page = url.searchParams.get("page");
          return page;
        }
        return undefined;
      },
    }
  );

export default useGames;
