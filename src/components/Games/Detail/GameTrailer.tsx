import useTrailers from "../../../hooks/useTrailers";
import { AspectRatio } from "@chakra-ui/react";

interface Props {
  gameId: string;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trailers, isLoading, error } = useTrailers(gameId!);
  const trailer = trailers?.results[0];
  if (isLoading) return null;

  if (error) throw error;

  return (
    <AspectRatio ratio={16 / 9}>
      <video poster={trailer?.preview} controls src={trailer?.data[480]} />
    </AspectRatio>
  );
};

export default GameTrailer;
