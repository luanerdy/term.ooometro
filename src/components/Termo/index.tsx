import { TileLineProps } from "../../@types/propsTypes";
import { Row } from "../general/Row";
import { TermoStyles } from "./styles";
import { initTiles } from "./utils";

const Termo = () => {
  const tiles = initTiles(6);
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
