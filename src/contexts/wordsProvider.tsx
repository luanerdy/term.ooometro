import { createContext, useState } from "react";
import { WordContextType, WordsProviderProps } from "../@types/propsTypes";
import { initWord } from "../pages/Main/utils/keyboard";

export const WordsContext = createContext({} as WordContextType);

export const WordsProvider = (props: WordsProviderProps) => {
  const { children } = props;
  const [words, setWords] = useState([initWord]);

  const handleChangeTileState = (row: number, col: number, state: string) => {
    const newWords = words.map((word, i) => i === row ? word.map((letter, j) => j === col ? {...letter, state} : letter) : word);
    setWords(newWords);
  };

  return (
    <WordsContext.Provider value={{words, setWords, handleChangeTileState}}>
      {children}
    </WordsContext.Provider>
  );
};
