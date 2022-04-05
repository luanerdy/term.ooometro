import { useContext, useEffect, useState } from "react";
import { TileLineProps } from "../../@types/propsTypes";
import { WordsContext } from "../../contexts/wordsProvider";
import { Row } from "../general/Row";
import { TermoStyles } from "./styles";
import { getTiles } from "./utils";

const Termo = () => {
  const { words } = useContext(WordsContext);
  const [tiles, setTiles] = useState(getTiles(6, words));

  useEffect(() => {
    setTiles(getTiles(6, words));
  }, [words]);

  return (
    <TermoStyles>
      {
        tiles.map((line: TileLineProps, idx) => (
          <Row key={idx} row={idx} line={line} />
        ))
      }
    </TermoStyles>
  );
};

export { Termo };
