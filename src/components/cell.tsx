import { Player } from "../domain/players";

export interface CellProps {
  onStateChange: (val: Player) => void;
}

export type Cell = (props: CellProps) => JSX.Element;
