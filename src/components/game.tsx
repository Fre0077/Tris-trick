import { Heading, VStack } from "@chakra-ui/react";
import { createContext, useState } from "react";
import { Player } from "../domain/players";
import { BigGrid } from "./bigGrid";

export type TurnContextType = { turn: Player; switchTurn: () => void };
export const TurnContext = createContext<TurnContextType>({
  turn: "blue",
  switchTurn: () => {},
});

export function Game() {
  const [victory, setVictory] = useState<Player | undefined>(undefined);
  const [turn, setTurn] = useState<Player>("blue");
  return (
    <VStack alignContent="center">
      <Heading>Tris-Trick</Heading>
      <Heading color={victory ? victory : turn} as="h2" size="xl">
        {victory ? `Winner is ${victory}` : `It's ${turn} turn`}
      </Heading>

      <TurnContext.Provider
        value={{
          turn: turn,
          switchTurn: () => {
            turn === "blue" ? setTurn("red") : setTurn("blue");
          },
        }}
      >
        <BigGrid onStateChange={(val) => setVictory(val)} />
      </TurnContext.Provider>
    </VStack>
  );
}
