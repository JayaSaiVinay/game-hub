import { Card, CardBody } from "@chakra-ui/card";
import { Game } from "../hooks/useGames";
import { Image } from "@chakra-ui/image";
import { Heading, HStack, Text } from "@chakra-ui/layout";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            key={game.id}
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore key={game.id} score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
