import useHttp from "./useHttp";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

const useGenres = () => useHttp<Genre>("genres");

export default useGenres;
