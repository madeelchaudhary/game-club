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
      columnGap={4}
    >
      <GridItem gridArea="header">
        <Header />
      </GridItem>
      <GridItem gridArea="main">
        <HStack>
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

      <GridItem hideBelow="lg" gridArea="aside" px={4} w="56">
        <GenreList
          selected={gameQuery.genre}
          onSelect={(genre) => setQuery({ genre })}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
