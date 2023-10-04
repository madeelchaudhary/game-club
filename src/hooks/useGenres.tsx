import { useQuery } from "@tanstack/react-query";

import genres from "../data/genres";
import { AxiosError, genresService } from "../services/api-client";
import ms from "ms";

const useGenres = () =>
  useQuery<Genre[], AxiosError>(
    ["genres"],
    () => genresService.getAll<Genre>().then((data) => data.results),
    {
      staleTime: ms("24h"), // 24 hours
      initialData: genres,
    }
  );

export default useGenres;
