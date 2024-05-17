import { BoxProps } from "@chakra-ui/react";
import { FC } from "react";
import { Cell, CellProps } from "./cell";
import { Grid3x3 } from "./grid3x3";
import { SimpleButton } from "./simpleButton";

export interface LittleGridProps extends CellProps, BoxProps {}

export const LittleGrid: FC<LittleGridProps> = ({
  onStateChange,
  ...rest
}: LittleGridProps) => {
  const buttons = new Array<Cell>(9).fill(
    ({ onStateChange: onStateChangeInner }) => {
      return <SimpleButton onStateChange={onStateChangeInner} />;
    },
  );
  return (
    <Grid3x3
      cells={buttons}
      onStateChange={(val) => {
        onStateChange(val);
      }}
      {...rest}
    />
  );
};
