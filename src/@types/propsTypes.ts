import { Dispatch, ReactChild, SetStateAction } from "react";

export interface Letter {
  state: string;
  letter: string;
}

export interface TileLineProps {
  type: string;
  word: Letter[];
};

type HandleChangeTileState = (row: number, col: number, state: string) => void;

export interface RowProps {
  line: TileLineProps;
  size: number;
  row: number;
  handleChangeTileState: HandleChangeTileState;
}

export interface TermoProps {
  keyWrite: [string, string];
  size: number;
  showResults: boolean;
  showButton?: boolean;
  setShowButton?: Dispatch<SetStateAction<boolean>>;
}

export interface BoardProps {
  board: Board;
  size: number;
}

export interface WordsProps {
  words: Letter[][];
  size: number;
}

export interface TileProps {
  children: ReactChild;
  size: number;
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


export type Board = 'termo' | 'dueto' | 'quarteto';

export interface HeaderProps {
  board: Board;
  setBoard: Dispatch<SetStateAction<Board>>;
  setSize: Dispatch<SetStateAction<number>>
}

export interface ButtonResultProps {
  showResults: boolean;
  setShowResults: Dispatch<SetStateAction<boolean>>;
}
