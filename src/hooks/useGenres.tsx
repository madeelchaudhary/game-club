import genres from "../data/genres";
import apiClient, { AxiosError } from "../services/api-client";
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
    () => apiClient.get("genres").then((response) => response.data.results),
    {
      staleTime: 24 * 60 * 60 * 1000, // 24 hours
      initialData: genres,
    }
  );

export default useGenres;
