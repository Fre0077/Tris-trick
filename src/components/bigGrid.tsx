import { FC } from "react";
import { Cell, CellProps } from "./cell";
import { Grid3x3 } from "./grid3x3";
import { LittleGrid } from "./littleGrid";

export interface BigGridProps extends CellProps {}

export const BigGrid: FC<BigGridProps> = ({ onStateChange }: BigGridProps) => {
  const grids = new Array<Cell>(9).fill(({ onStateChange: innerOnStateChange }) => {
    return <LittleGrid onStateChange={innerOnStateChange} />;
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
