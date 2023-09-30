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
  onSelect: (genreId: number) => void;
  selected?: number;
}

const GenreList = ({ onSelect, selected }: Props) => {
  const { data } = useGenres();

  const handleSelect = (genre: Genre) => {
    onSelect(genre.id);
  };

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
                onClick={() => selected != genre.id && handleSelect(genre)}
                variant="link"
                fontSize="md"
                fontWeight={selected === genre.id ? "bold" : "normal"}
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
