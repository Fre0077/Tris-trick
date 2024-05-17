import { FC } from "react";
import { Cell, CellProps } from "./cell";
import { Grid3x3 } from "./grid3x3";
import { LittleGrid } from "./littleGrid";

export interface BigGridProps extends CellProps {}

export const BigGrid: FC<BigGridProps> = ({ onStateChange }: BigGridProps) => {
  const grids = new Array<Cell>();
  for (let i = 0; i < 9; i++) {
    grids.push(({ onStateChange: innerOnStateChange }) => {
      return (
        <LittleGrid
          onStateChange={innerOnStateChange}
          borderTop={i >= 3 ? "2px" : undefined}
          borderRight={(i + 1) % 3 != 0 ? "2px" : undefined}
          borderBottom={i <= 5 ? "2px" : undefined}
          borderColor="black"
        />
      );
    });
  }
  return (
    <Grid3x3
      cells={grids}
      boxSize="40rem"
      onStateChange={(val) => {
        onStateChange(val);
      }}
    />
  );
};
