import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconsList";
import CriticalScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image
        src={game.background_image}
        overflow="hidden"
        borderRadius="10"
      ></Image>
      <CardBody>
        <HStack justifyContent="space-between">        
          <PlatformIconList
          platforms={game.parent_platforms.map((pp) => pp.platform)}
          />
          
          <CriticalScore score={game.metacritic} />
        </HStack>
        <Heading size="md" marginTop="2">
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;