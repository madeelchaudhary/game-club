import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";

import { APIResponse, AxiosError, gamesService } from "../services/api-client";
import useGamesQuery from "../store/gameQuery";

const useGames = () => {
  const query = useGamesQuery((s) => s.query);
  return useInfiniteQuery<
    APIResponse<Game>,
    AxiosError,
    APIResponse<Game>,
    [string, typeof query]
  >(
    ["games", query],
    async ({ queryKey, pageParam }) => {
      const [, query] = queryKey;
      const params = {
        genres: query.genreId,
        parent_platforms: query.platformId,
        ordering: query.sort,
        search: query.search,
        page: pageParam || 1,
      };

      const data = await gamesService.getAll<Game>(params);
      return data;
    },
    {
      staleTime: ms("1h"),
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
};

export default useGames;
