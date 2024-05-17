import { Image, ImageProps } from "@chakra-ui/react";
import { Player } from "../domain/players";

export interface VictoryIconProps extends ImageProps {
  color?: Player;
}

export function VictoryIcon(props: VictoryIconProps) {
  const {color} = props
  return color === "blue" ? (
    <Image src="blueCircle.png" {...props}/>
  ) : color === "red" ?(
    <Image src="redCross.png" {...props}/>
  ): null;
}
