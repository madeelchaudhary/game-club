import { Heading } from "@chakra-ui/react";

import useGenre from "../../hooks/useGenre";
import usePlatform from "../../hooks/usePlatform";
import useGameQuery from "../../store/gameQuery";

const GameHeading = () => {
  const [platformId, genreId] = useGameQuery((s) => [
    s.query.platformId,
    s.query.genreId,
  ]);
  const platform = usePlatform(platformId);
  const genre = useGenre(genreId);

  return (
    <Heading as="h1" size="2xl" mb={6}>
      {platform?.name} {genre?.name} Games
    </Heading>
  );
};

export default GameHeading;
