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
import useGameQuery from "../../store/gameQuery";

const GenreList = () => {
  const [selected, setGenreId] = useGameQuery((s) => [
    s.query.genreId,
    s.setGenreId,
  ]);
  const { data } = useGenres();

  const handleSelect = (genre: Genre) => {
    setGenreId(genre.id);
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
