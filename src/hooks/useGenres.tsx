import genres from "../data/genres";
import { genresService, AxiosError } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

const useGenres = () =>
  useQuery<Genre[], AxiosError>(
    ["genres"],
    () => genresService.get<Genre>().then((data) => data.results),
    {
      staleTime: 24 * 60 * 60 * 1000, // 24 hours
      initialData: genres,
    }
  );

export default useGenres;
