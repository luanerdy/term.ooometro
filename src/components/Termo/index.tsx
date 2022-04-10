import { useEffect, useState } from "react";
import { TermoProps, TileLineProps } from "../../@types/propsTypes";
import { Row } from "../general/Row";
import { TermoStyles } from "./styles";
import { getTiles } from "./utils";

const Termo = (props: TermoProps) => {
  const { words, size, handleChangeTileState } = props;
  const [tiles, setTiles] = useState(getTiles(size, words));

  useEffect(() => {
    setTiles(getTiles(size, words));
  }, [words]);

  return (
    <TermoStyles size={size}>
      {
        tiles.map((line: TileLineProps, idx) => (
          <Row key={idx} size={size} handleChangeTileState={handleChangeTileState} row={idx} line={line} />
        ))
      }
    </TermoStyles>
  );
};

export { Termo };
