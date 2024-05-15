import { FC } from "react";
import { Cell, CellProps } from "./cell";
import { Grid3x3 } from "./grid3x3";

export interface BigGridProps extends CellProps {}

export const BigGrid: FC<BigGridProps> = ({ onStateChange }: BigGridProps) => {
  const grids = new Array<Cell>(9).fill(({ onStateChange }) => {
    return <BigGrid onStateChange={onStateChange} />;
  });
  return (
    <Grid3x3
      cells={grids}
      onStateChange={(val) => {
        onStateChange(val);
      }}
    />
  );
};
