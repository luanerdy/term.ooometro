import { RowProps } from "../../../@types/propsTypes";
import { Tile } from "../Tile";
import { RowStyles } from "./styles";

const Row = (props: RowProps) => {
  const { line, row, handleChangeTileState, size } = props;

  return (
    <RowStyles>
      {
        line.word.map((letter, idx) => <Tile size={size} handleChangeTileState={handleChangeTileState} pair={{row, col: idx}} key={idx} state={letter.state}>{letter.letter}</Tile>)
      }
    </RowStyles>
  );
};

export { Row };
