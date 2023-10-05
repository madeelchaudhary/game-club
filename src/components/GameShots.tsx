import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenShots from "../hooks/useScreenShots";

interface Props {
  gameId: string;
}

const GameShots = ({ gameId }: Props) => {
  const { data: shots, isLoading, error } = useScreenShots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
      {shots?.results.map((shot) => (
        <Image key={shot.id} src={shot.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameShots;
