import { Button } from "@chakra-ui/react";
import { Player } from "../domain/players";
import { CellProps } from "./cell";

export interface SimpleButtonProps extends CellProps {}

export function SimpleButton({ onStateChange }: SimpleButtonProps) {
  const turn: Player = "blue"; //TODO: get current turn
  return <Button onClick={() => onStateChange(turn)} />;
}
