import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";

import PlatformIconList from "./PlatformIconList";
import GameContainer from "./GameContainer";
import CriticScore from "./CriticScore";
import getOptimizedImageUrl from "../services/image-url";
import { Game as GameType } from "../hooks/useGames";

interface Props {
  game: GameType;
}

const Game = ({ game }: Props) => {
  const { name, background_image, parent_platforms, metacritic } = game;

  return (
    <GameContainer>
      <Card>
        <Image src={getOptimizedImageUrl(background_image)} alt={name} />
        <CardBody>
          <Heading as="h3" size="md" fontSize={"2xl"} mb={"1.5"}>
            {name}
          </Heading>
          <HStack justify="space-between">
            <PlatformIconList platforms={parent_platforms} />
            <CriticScore criticScore={metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </GameContainer>
  );
};

export default Game;
