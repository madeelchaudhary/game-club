import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import GameList from "./components/GameList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"header" "main"`,
        lg: `"header header" "aside main"`,
      }}
      templateColumns={{ base: "1fr  ", lg: "1fr 3fr" }}
    >
      <GridItem gridArea="header">
        <Header />
      </GridItem>
      <GridItem gridArea="main">
        <GameList />
      </GridItem>

      <GridItem hideBelow="lg" bg="pink" gridArea="aside">
        Aside Content
      </GridItem>
    </Grid>
  );
}

export default App;
