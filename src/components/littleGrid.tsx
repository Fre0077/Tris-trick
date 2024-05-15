import { FC } from "react";
import { Cell, CellProps } from "./cell";
import { Grid3x3 } from "./grid3x3";
import { SimpleButton } from "./simpleButton";

export interface LittleGridProps extends CellProps {}

export const LittleGrid: FC<LittleGridProps> = ({
  onStateChange,
}: LittleGridProps) => {
  const buttons = new Array<Cell>(9).fill(({ onStateChange }) => {
    return <SimpleButton onStateChange={onStateChange} />;
  });
  return (
    <Grid3x3
      cells={buttons}
      onStateChange={(val) => {
        onStateChange(val);
      }}
    />
  );
};
