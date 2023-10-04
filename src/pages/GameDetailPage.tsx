import { Box, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";

const GameDetailPage = () => {
  const params = useParams();
  const { data, isLoading, error } = useGame(params.id!);

  if (isLoading) return <Spinner />;

  if (error || !data) throw error;

  return (
    <>
      <Heading as="h1" size="lg">
        {data.name}
      </Heading>
      <ExpandableText text={data.description_raw} />
      <Box mt={6}>
        <GameAttributes game={data} />
      </Box>
    </>
  );
};

export default GameDetailPage;
