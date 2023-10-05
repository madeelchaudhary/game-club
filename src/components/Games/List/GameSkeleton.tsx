import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

import GameContainer from "./GameContainer";

const GameSkeleton = () => {
  return (
    <GameContainer>
      <Card>
        <Skeleton height="200px" />
        <CardBody>
          <SkeletonText mt="4" noOfLines={2} spacing="4" skeletonHeight="6" />
        </CardBody>
      </Card>
    </GameContainer>
  );
};

export default GameSkeleton;
