import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameSkeleton = () => {
  return (
    <Card w="full" rounded={"xl"} overflow={"hidden"}>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText mt="4" noOfLines={2} spacing="4" skeletonHeight="6" />
      </CardBody>
    </Card>
  );
};

export default GameSkeleton;
