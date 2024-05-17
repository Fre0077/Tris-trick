import { Button } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Player } from "../domain/players";
import { CellProps } from "./cell";
import { TurnContext } from "./game";
import { VictoryIcon } from "./victoryIcon";

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
      rightIcon={<VictoryIcon winner={victory} boxSize="4rem" />}
      boxSize="4rem"
      margin="2px"
      isDisabled={!!victory}
    />
  );
}
