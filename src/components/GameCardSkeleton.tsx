import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

interface Props {
  height: number;
}
const GameCardSkeleton = ({ height }: Props) => {
  return (
    <Card>
      <Skeleton height={`${height}px`} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
