import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import GameList from "./components/GameList";
import GenreList from "./components/Genres/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  console.log(selectedGenre);

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
        <GameList selectedGenre={selectedGenre} />
      </GridItem>

      <GridItem hideBelow="lg" gridArea="aside" px={4} w="56">
        <GenreList
          onSelect={(genre) => setSelectedGenre(genre)}
          selected={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
