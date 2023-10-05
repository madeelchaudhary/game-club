import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const GameContainer = ({ children }: Props) => {
  return (
    <Box
      w="full"
      rounded={"xl"}
      overflow={"hidden"}
      shadow="sm"
      _hover={{ scale: 1.04 }}
      transform="auto"
      transition="transform 0.2s ease-in-out"
    >
      {children}
    </Box>
  );
};

export default GameContainer;
