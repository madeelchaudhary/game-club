import { SimpleGrid, Text } from "@chakra-ui/react";

import CriticScore from "../CriticScore";
import DefinitionItem from "../../DefinitionItem";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid as="dl" columns={2} gap={6}>
      <DefinitionItem title="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem title="MetaScore">
        <CriticScore criticScore={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem title="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem title="Publisher">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
