import { Box, Grid, Heading, Spinner, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/Games/Detail/GameAttributes";
import GameTrailer from "../components/Games/Detail/GameTrailer";
import GameShots from "../components/Games/Detail/GameShots";

const GameDetailPage = () => {
  const params = useParams();
  const { data, isLoading, error } = useGame(params.id!);

  if (isLoading) return <Spinner />;

  if (error || !data) throw error;

  return (
    <Grid
      templateColumns={{ base: "1fr", md: "1fr 1fr" }}
      gap={6}
      px={{ base: 4, sm: 5 }}
      py={8}
      maxW="1560"
      m="auto"
    >
      <VStack align={"stretch"} gap={7}>
        <Box>
          <Heading mb={2} as="h1">
            {data.name}
          </Heading>
          <ExpandableText text={data.description_raw} />
        </Box>
        <GameAttributes game={data} />
      </VStack>

      <VStack align={"stretch"} gap={7}>
        <GameTrailer gameId={data.slug} />
        <GameShots gameId={data.slug} />
      </VStack>
    </Grid>
  );
};

export default GameDetailPage;
