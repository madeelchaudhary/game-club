import { Grid, GridItem, HStack } from "@chakra-ui/react";

import GameHeading from "./components/GameHeading";
import GameList from "./components/GameList";
import GenreList from "./components/Genres/GenreList";
import Header from "./components/Header";
import PlatformSelector from "./components/Selectors/PlatformSelector";
import SortSelector from "./components/Selectors/SortSelector";

function App() {
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
        <Header />
      </GridItem>
      <GridItem gridArea="main">
        <GameHeading />
        <HStack mb={5} gap={3} alignItems="stretch">
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameList />
      </GridItem>

      <GridItem hideBelow="lg" gridArea="aside" w="52">
        <GenreList />
      </GridItem>
    </Grid>
  );
}

export default App;
