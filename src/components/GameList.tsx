import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import Game from "./Game";
import GameSkeleton from "./GameSkeleton";

const GameList = () => {
  const { games, error, loading } = useGames();
  const skeletons = Array.from({ length: 6 });
  console.log(loading);
  return (
    <>
      {error && <div>{error}</div>}
      <SimpleGrid p="4" columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
        {loading && (
          <>
            {skeletons.map((_, index) => (
              <GameSkeleton key={index} />
            ))}
          </>
        )}
        {games.map((game) => (
          <Game key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameList;
