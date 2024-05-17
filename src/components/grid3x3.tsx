import { Grid, GridItem, GridProps } from "@chakra-ui/react";
import { FC, useState } from "react";
import { Player } from "../domain/players";
import { Cell, CellProps } from "./cell";
import { VictoryIcon } from "./victoryIcon";

export interface Grid3x3Props extends GridProps, CellProps {
  cells: Array<Cell>;
}

export const Grid3x3: FC<Grid3x3Props> = ({
  cells,
  onStateChange,
  ...rest
}: Grid3x3Props) => {
  const [victory, setVictory] = useState<Player | undefined>(undefined);
  if (cells.length != 9) {
    throw new Error("Invalid number of cells");
  }
  const columsNumber = 3;
  const [winState, setWinState] = useState(
    new Array<Player | undefined>(cells.length),
  );
  const cellChange = (index: number) => {
    return (val: Player) => {
      winState[index] = val;
      setWinState(winState);
      const winner = computeWinner(winState);
      if (winner) {
        setVictory(winner);
        onStateChange(winner);
      }
    };
  };

  if (victory) {
    return <VictoryIcon {...rest} winner={victory}></VictoryIcon>;
  }

  return (
    <Grid
      alignSelf="center"
      gridTemplateColumns="[a] min-content [b] min-content [c] min-content"
      {...rest}
    >
      {cells.map((cell, i) => (
        <GridItem
          gridRow={Math.floor(i / columsNumber) + 1}
          gridColumn={(i % columsNumber) + 1}
          key={i}
        >
          {cell({ onStateChange: cellChange(i) })}
        </GridItem>
      ))}
    </Grid>
  );
};

function computeWinner(array: Array<Player | undefined>): Player | undefined {
  let res: Player | undefined;
  res = checkVertical(array);
  if (res) {
    return res;
  }
  res = checkHorizontal(array);
  if (res) {
    return res;
  }
  res = checkDiagonal(array);
  if (res) {
    return res;
  }
  return undefined;
}

function checkVertical(array: Array<Player | undefined>): Player | undefined {
  for (let index = 0; index < 3; index++) {
    if (
      array[index] === array[index + 3] &&
      array[index + 3] === array[index + 6]
    ) {
      return array[index];
    }
  }
  return undefined;
}

function checkHorizontal(array: Array<Player | undefined>): Player | undefined {
  for (let index = 0; index < 9; index = index + 3) {
    if (
      array[index] === array[index + 1] &&
      array[index + 1] === array[index + 2]
    ) {
      return array[index];
    }
  }
  return undefined;
}

function checkDiagonal(array: Array<Player | undefined>): Player | undefined {
  if (
    (array[0] === array[4] && array[4] === array[8]) ||
    (array[2] === array[4] && array[4] === array[6])
  ) {
    return array[4];
  }
  return undefined;
}
