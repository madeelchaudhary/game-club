import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";

import PlatformIconList from "./PlatformIconList";
import GameContainer from "./GameContainer";
import CriticScore from "./CriticScore";
import getOptimizedImageUrl from "../services/image-url";
import { Game as GameType } from "../hooks/useGames";
import Emoji from "./Emoji";

interface Props {
  game: GameType;
}

const Game = ({ game }: Props) => {
  const { name, background_image, parent_platforms, metacritic, rating_top } =
    game;

  return (
    <GameContainer>
      <Card h="full">
        <Image src={getOptimizedImageUrl(background_image)} alt={name} />
        <CardBody>
          <HStack justify="space-between">
            <PlatformIconList platforms={parent_platforms} />
            <CriticScore criticScore={metacritic} />
          </HStack>
          <Heading as="h3" size="md" fontSize="2xl" my="2">
            {name}
          </Heading>
          <Emoji rating={rating_top} />
        </CardBody>
      </Card>
    </GameContainer>
  );
};

export default Game;
