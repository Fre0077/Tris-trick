import { Image, ImageProps } from "@chakra-ui/react";
import { Player } from "../domain/players";

export interface VictoryIconProps extends ImageProps {
  winner?: Player;
}

export function VictoryIcon(props: VictoryIconProps) {
  const { winner } = props;
  return winner === "blue" ? (
    <Image src="blueCircle.png" align="stretch" {...props} />
  ) : winner === "red" ? (
    <Image src="redCross.png" align="stretch" {...props} />
  ) : null;
}
