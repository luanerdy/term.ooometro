import { useEffect, useState } from "react";
import { TileLineProps } from "../../@types/propsTypes";
import { Row } from "../general/Row";
import { TermoStyles } from "./styles";
import { getTiles } from "./utils";

const Termo = () => {
  const [words, setWords] = useState([[{state: 'right', letter: 'a'}, {state: 'place', letter: 'r'}, {state: 'place', letter: 'a'}, {state: 'wrong', letter: 'r'}, {state: 'wrong', letter: 'a'}]]);
  const [tiles, setTiles] = useState(getTiles(6, words));

  useEffect(() => {
    setTiles(getTiles(6, words));
  }, [words]);

  debugger;

  return (
    <TermoStyles>
      {
        tiles.map((line: TileLineProps) => (
          <Row line={line} />
        ))
      }
    </TermoStyles>
  );
};

export { Termo };
