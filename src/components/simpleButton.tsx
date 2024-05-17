import { Button } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { CellProps } from "./cell";
import { TurnContext } from "./game";
import { VictoryIcon } from "./victoryIcon";
import { Player } from "../domain/players";

export interface SimpleButtonProps extends CellProps {}

export function SimpleButton({ onStateChange }: SimpleButtonProps) {
  const [victory, setVictory] = useState<Player | undefined>(undefined);
  const { turn, switchTurn } = useContext(TurnContext);
  return (
    <Button
      onClick={() => {
        onStateChange(turn);
        setVictory(turn);
        switchTurn();
      }}
      rightIcon={<VictoryIcon color={victory} boxSize="3rem"/>}
      isDisabled={!!victory}
    />
  );
}
