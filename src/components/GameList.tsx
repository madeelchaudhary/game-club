import { SimpleGrid, Text } from "@chakra-ui/react";

import useGames from "../hooks/useGames";
import Game from "./Game";
import GameSkeleton from "./GameSkeleton";
import { GameQuery } from "../App";

interface Props {
  query: GameQuery;
}

const GameList = ({ query }: Props) => {
  const { data, error, loading } = useGames(query);
  const skeletons = Array.from({ length: 6 });

  if (error) return <Text color="red">{error}</Text>;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={4}>
      {loading && (
        <>
          {skeletons.map((_, index) => (
            <GameSkeleton key={index} />
          ))}
        </>
      )}
      {!loading && data.map((game) => <Game key={game.id} game={game} />)}
    </SimpleGrid>
  );
};

export default GameList;
