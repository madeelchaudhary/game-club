import { useState } from "react";
import { Grid, GridItem, HStack } from "@chakra-ui/react";

import Header from "./components/Header";
import GameList from "./components/GameList";
import GenreList from "./components/Genres/GenreList";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";
import PlatformSelector from "./components/Selectors/PlatformSelector";
import SortSelector, { Sort } from "./components/Selectors/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sort: Sort | null;
  search?: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
    sort: null,
  });

  function setQuery(query: Partial<GameQuery>) {
    setGameQuery((prev) => ({ ...prev, ...query }));
  }

  return (
    <Grid
      templateAreas={{
        base: `"header" "main"`,
        lg: `"header header" "aside main"`,
      }}
      templateColumns={{ base: "1fr  ", lg: "auto 1fr" }}
      columnGap={5}
      px={5}
      pb={6}
    >
      <GridItem gridArea="header">
        <Header onSearch={(query) => setQuery({ search: query })} />
      </GridItem>
      <GridItem gridArea="main">
        <HStack mb={5} gap={3} alignItems="stretch">
          <PlatformSelector
            selected={gameQuery.platform}
            onSelect={(platform) => setQuery({ platform })}
          />
          <SortSelector
            selected={gameQuery.sort}
            onSelect={(sort) => setQuery({ sort })}
          />
        </HStack>
        <GameList query={gameQuery} />
      </GridItem>

      <GridItem hideBelow="lg" gridArea="aside" w="56">
        <GenreList
          selected={gameQuery.genre}
          onSelect={(genre) => setQuery({ genre })}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
