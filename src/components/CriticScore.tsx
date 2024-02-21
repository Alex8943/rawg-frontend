import { Badge } from 'react-bootstrap';

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score >= 75 ? "green" : score >= 50 ? "yellow" : "red";

  return (
    <Badge
      as={Badge}
      border="1px solid"
      fontSize="14px"
      padding={2}
      borderRadius="4px"
      colorScheme={color}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
