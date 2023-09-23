import { List, ListItem, Skeleton } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  const items = Array.from({ length: 10 });

  return (
    <List>
      {items.map((_, index) => (
        <ListItem key={index} py="1.5">
          <Skeleton height={8} />
        </ListItem>
      ))}
    </List>
  );
};

export default GenreListSkeleton;
