import { Box, Heading, List } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  title: string;
}

const ListView = ({ children, title }: Props) => {
  return (
    <>
      <Box>
        <Heading as="dt" fontSize="md" color="gray.600">
          {title}
        </Heading>
        <List as="dd" spacing={1} my={1}>
          {children}
        </List>
      </Box>
    </>
  );
};

export default ListView;
