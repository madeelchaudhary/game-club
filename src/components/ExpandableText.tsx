import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  text: string;
  max?: number;
}

const GameDescription = ({ text, max = 300 }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const toggleShown = () => setExpanded((expanded) => !expanded);

  if (text.length < max) return <Text>{text}</Text>;

  return (
    <Text>
      {expanded ? text : `${text.slice(0, max)}... `}
      <Button
        marginLeft={1}
        size="xs"
        fontWeight="bold"
        onClick={toggleShown}
        colorScheme="yellow"
      >
        {expanded ? "Show less" : "Show more"}
      </Button>
    </Text>
  );
};

export default GameDescription;
