import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";

import useGenres, { Genre } from "../../hooks/useGenres";
import getOptimizedImageUrl from "../../services/image-url";

interface Props {
  onSelect: (genre: Genre) => void;
  selected: Genre | null;
}

const GenreList = ({ onSelect, selected }: Props) => {
  const { data } = useGenres();

  return (
    <>
      <Heading fontSize="2xl" mb={3}>
        Genres
      </Heading>
      <List>
        {data?.map((genre) => (
          <ListItem key={genre.id} py="1.5">
            <HStack>
              <Image
                boxSize="8"
                objectFit="cover"
                rounded="lg"
                src={getOptimizedImageUrl(genre.image_background)}
                alt={genre.name}
              />
              <Button
                onClick={() => selected?.id != genre.id && onSelect(genre)}
                variant="link"
                fontSize="md"
                fontWeight={selected?.id === genre.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
