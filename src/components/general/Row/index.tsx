import { useContext } from "react";
import { RowProps } from "../../../@types/propsTypes";
import { WordsContext } from "../../../contexts/wordsProvider";
import { Tile } from "../Tile";
import { RowStyles } from "./styles";

const Row = (props: RowProps) => {
  const { line, row } = props;
  const { handleChangeTileState } = useContext(WordsContext);

  return (
    <RowStyles>
      {
        line.word.map((letter, idx) => <Tile handleChangeTileState={handleChangeTileState} pair={{row, col: idx}} key={idx} state={letter.state}>{letter.letter}</Tile>)
      }
    </RowStyles>
  );
};

export { Row };
