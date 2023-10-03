import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Flex p="16" h="full" alignItems="center">
      <VStack justifyContent="center" px="5" mx="auto" my="8">
        <Box maxW="lg" textAlign="center">
          <Heading as="h1" fontSize="9xl" fontWeight="extrabold" mb="8">
            <Text as="span" srOnly>
              Error
            </Text>
            404
          </Heading>
          <Text
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="semibold"
            mb="4"
          >
            Sorry, we couldn't find this page.
          </Text>
          <Text mb="8">
            But dont worry, you can find plenty of other things on our homepage.
          </Text>
          <Button as={Link} to="/" size="lg">
            Back to homepage
          </Button>
        </Box>
      </VStack>
    </Flex>
  );
};

export default NotFound;
