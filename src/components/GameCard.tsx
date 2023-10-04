import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import PlatformIconList from "./PlatformIconList";
import GameContainer from "./GameContainer";
import CriticScore from "./CriticScore";
import getOptimizedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const {
    name,
    background_image,
    parent_platforms,
    metacritic,
    rating_top,
    slug,
  } = game;

  return (
    <GameContainer>
      <Link to={`/game/${slug}`}>
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
      </Link>
    </GameContainer>
  );
};

export default GameCard;
