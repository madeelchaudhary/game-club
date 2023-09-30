import useGenres from "./useGenres";

const useGenre = (genreId?: number) => {
  const { data } = useGenres();

  if (!genreId) return;

  return data?.find((genre) => genre.id === genreId);
};

export default useGenre;
