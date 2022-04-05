import { Dispatch, ReactChild, SetStateAction } from "react";

export interface Letter {
  state: string;
  letter: string;
}

export interface TileLineProps {
  type: string;
  word: Letter[];
};

export interface RowProps {
  line: TileLineProps;
  row: number;
}

type HandleChangeTileState = (row: number, col: number, state: string) => void;

export interface TileProps {
  children: ReactChild;
  state: string;
  handleChangeTileState: HandleChangeTileState;
  pair: {
    row: number;
    col: number;
  }
};

export interface WordContextType {
  words: Letter[][];
  setWords: Dispatch<SetStateAction<Letter[][]>>;
  handleChangeTileState: HandleChangeTileState;
}

export interface KeyboardProps {
  setActiveLetter: (type: string, newLetter?: string) => void;
}

export interface WordsProviderProps {
  children: ReactChild[];
}