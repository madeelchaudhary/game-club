import { Badge } from "@chakra-ui/react";

interface Props {
  criticScore: number;
}

const CriticScore = ({ criticScore }: Props) => {
  const colorScheme =
    criticScore > 75 ? "green" : criticScore > 60 ? "yellow" : "";

  return (
    <Badge
      fontSize="sm"
      fontWeight="medium"
      px="1.5"
      rounded="4px"
      colorScheme={colorScheme}
    >
      {criticScore}
    </Badge>
  );
};

export default CriticScore;
