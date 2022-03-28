import { RowProps } from "../../../@types/propsTypes";
import { Tile } from "../Tile";
import { RowStyles } from "./styles";

const Row = (props: RowProps) => {
  const { line } = props;

  return (
    <RowStyles>
      {
        line.word.map(letter => <Tile state={letter.state}>{letter.letter}</Tile>)
      }
    </RowStyles>
  );
};

export { Row };
