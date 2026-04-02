import { createContext, useState } from "react";

const CharacterCountContext = createContext();

function CharacterCountProvider({ children }) {
  const [text, setText] = useState("");

  return (
    <CharacterCountContext.Provider value={{ text, setText }}>
      {children}
    </CharacterCountContext.Provider>
  );
}

export { CharacterCountContext, CharacterCountProvider };
