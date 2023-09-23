import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../../hooks/useGenres";
import getOptimizedImageUrl from "../../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelect: (genre: Genre) => void;
  selected: Genre | null;
}

const GenreList = ({ onSelect, selected }: Props) => {
  const { data, error, loading } = useGenres();

  if (loading) return <GenreListSkeleton />;

  return (
    <List>
      {error && <div>{error}</div>}
      {data.map((genre) => (
        <ListItem key={genre.id} py="1.5">
          <HStack>
            <Image
              boxSize="8"
              rounded="lg"
              src={getOptimizedImageUrl(genre.image_background)}
              alt={genre.name}
            />
            <Button
              onClick={() => onSelect(genre)}
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
  );
};

export default GenreList;
