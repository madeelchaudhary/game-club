import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const GameContainer = ({ children }: Props) => {
  return (
    <Box w="full" rounded={"xl"} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GameContainer;
