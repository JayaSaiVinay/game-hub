import { Badge } from "@chakra-ui/layout";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  return (
    <>
      {score >= 80 && (
        <Badge fontSize="14px" colorScheme="green" borderRadius="5px">
          {score}
        </Badge>
      )}
      {score >= 60 && score < 80 && (
        <Badge fontSize="14px" colorScheme="orange" borderRadius="5px">
          {score}
        </Badge>
      )}
      {score < 60 && (
        <Badge fontSize="14px" colorScheme="red" borderRadius="5px">
          {score}
        </Badge>
      )}
    </>
  );
};

export default CriticScore;
