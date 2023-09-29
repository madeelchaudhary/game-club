import { Button, SimpleGrid, Text } from "@chakra-ui/react";

import useGames from "../hooks/useGames";
import Game from "./Game";
import GameSkeleton from "./GameSkeleton";
import { GameQuery } from "../App";

interface Props {
  query: GameQuery;
}

const GameList = ({ query }: Props) => {
  // const pageSize = 12;
  const updatedQuery = { ...query };
  const { data, error, isLoading, isFetchingNextPage, fetchNextPage } =
    useGames(updatedQuery);

  const skeletons = Array.from({ length: 6 });

  if (error) return <Text color="red">{error.message}</Text>;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={4}>
      {isLoading && (
        <>
          {skeletons.map((_, index) => (
            <GameSkeleton key={index} />
          ))}
        </>
      )}
      {data && data.pages.length === 0 && (
        <Text color="gray.400">No games found</Text>
      )}
      {data &&
        data.pages.map((page) => (
          <>
            {page.results.map((game) => (
              <Game key={game.id} game={game} />
            ))}
          </>
        ))}
      {data && data.pages.length >= 0 && (
        <Button
          w="fit-content"
          size="lg"
          fontWeight="normal"
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </SimpleGrid>
  );
};

export default GameList;
