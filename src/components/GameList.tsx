import React from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";

import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";

const GameList = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();

  const skeletons = Array.from({ length: 6 });

  if (error) return <Text color="red">{error.message}</Text>;

  const dataLength =
    data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      style={{ overflow: "initial" }}
      next={fetchNextPage}
      hasMore={hasNextPage || false}
      loader={
        <Text textAlign="center" colorScheme="gray" mt="2" w="100%">
          Loading...
        </Text>
      }
      endMessage={
        <Text textAlign="center" colorScheme="gray" mt="2" w="100%">
          No more games
        </Text>
      }
      dataLength={dataLength}
      scrollThreshold={0.9}
    >
      <SimpleGrid columns={{ sm: 2, md: 2, lg: 3, xl: 4 }} spacing={4}>
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
        {data?.pages.map((page) => (
          <React.Fragment key={page.next}>
            {page.results.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameList;
