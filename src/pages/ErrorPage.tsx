import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NotFound from "./NotFound";
import { Flex, VStack, Heading, Box, Text } from "@chakra-ui/react";

const ErrorPage = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) return <NotFound />;

  const errorMessage = (error as Error).message;

  return (
    <Flex p="16" h="full" alignItems="center">
      <VStack justifyContent="center" px="5" mx="auto" my="8">
        <Box maxW="lg" textAlign="center">
          <Heading as="h1" fontSize="9xl" fontWeight="extrabold" mb="8">
            <Text as="span" srOnly>
              Error
            </Text>
            Oops, something went wrong
          </Heading>
          <Text
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="semibold"
            mb="4"
          >
            {errorMessage}
          </Text>
        </Box>
      </VStack>
    </Flex>
  );
};

export default ErrorPage;
