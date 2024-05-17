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
    <div>
      <h1>Tris-Trick</h1>
      {`It's ${turn} turn`}
      {victory ? `Winner is ${victory}` : undefined}
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
    </div>
  );
}
