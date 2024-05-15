import { Image } from "@chakra-ui/react";
import { Player } from "../domain/players";

export interface VictoryIconProps {
  color: Player;
}

export function VictoryIcon({ color }: VictoryIconProps) {
  return color === "blue" ? (
    <Image src="blueCircle.png" />
  ) : (
    <Image src="redCross.png" />
  );
}
