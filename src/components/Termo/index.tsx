import { useEffect, useState } from "react";
import { TermoProps, TileLineProps } from "../../@types/propsTypes";
import { Row } from "../general/Row";
import { TermoStyles } from "./styles";
import { getTiles } from "./utils";

const Termo = (props: TermoProps) => {
  const { words } = props;
  const [tiles, setTiles] = useState(getTiles(6, words));

  useEffect(() => {
    setTiles(getTiles(6, words));
  }, [words]);

  return (
    <TermoStyles>
      {
        tiles.map((line: TileLineProps, idx) => (
          <Row key={idx} line={line} />
        ))
      }
    </TermoStyles>
  );
};

export { Termo };
