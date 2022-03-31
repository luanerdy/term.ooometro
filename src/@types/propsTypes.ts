import { ReactChild } from "react";

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
}

export interface TileProps {
  children: ReactChild;
  state: string;
};

export interface TermoProps {
  words: Letter[][];
}

export interface KeyboardProps {
  setActiveLetter: (type: string, newLetter?: string) => void;
}
