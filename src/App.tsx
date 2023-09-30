import { Grid, GridItem, HStack } from "@chakra-ui/react";
import { useState } from "react";

import GameHeading from "./components/GameHeading";
import GameList from "./components/GameList";
import GenreList from "./components/Genres/GenreList";
import Header from "./components/Header";
import PlatformSelector from "./components/Selectors/PlatformSelector";
import SortSelector from "./components/Selectors/SortSelector";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sort?: string;
  search?: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({});

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
      px={{ base: 4, sm: 5 }}
      pb={6}
      maxW="1560"
      m="auto"
    >
      <GridItem gridArea="header">
        <Header onSearch={(query) => setQuery({ search: query })} />
      </GridItem>
      <GridItem gridArea="main">
        <GameHeading gameQuery={gameQuery} />
        <HStack mb={5} gap={3} alignItems="stretch">
          <PlatformSelector
            selected={gameQuery.platformId}
            onSelect={(platformId) => setQuery({ platformId })}
          />
          <SortSelector
            selected={gameQuery.sort}
            onSelect={(sort) => setQuery({ sort })}
          />
        </HStack>
        <GameList query={gameQuery} />
      </GridItem>

      <GridItem hideBelow="lg" gridArea="aside" w="52">
        <GenreList
          selected={gameQuery.genreId}
          onSelect={(genreId) => setQuery({ genreId })}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
