import { ReactChild } from "react";

interface Letter {
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
