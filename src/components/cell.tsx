import { Player } from "../domain/players";

export type CellProps = {
  onStateChange: (val: Player) => void;
};

export type Cell = (props: CellProps) => JSX.Element;
