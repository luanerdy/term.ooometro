import { useEffect, useState } from "react";
import { Letter, TermoProps, TileLineProps } from "../../@types/propsTypes";
import {
  handleSetActiveLetter,
  initWord,
} from "../../pages/Main/utils/keyboard";
import { Row } from "../general/Row";
import { Words } from "../Words";
import { TermoStyles } from "./styles";
import { getTiles } from "./utils";

const Termo = (props: TermoProps) => {
  const { keyWrite, size, showResults } = props;
  const [words, setWords] = useState<Letter[][]>([initWord]);
  const [tiles, setTiles] = useState(getTiles(size, words));

  useEffect(() => {
    if (keyWrite[0] === "stop") return;
    setActiveLett();
  }, [keyWrite]);

  useEffect(() => {
    const showButton = props.showButton;
    const setShowButton = props.setShowButton || (() => null);

    if(showButton !== undefined) {
      setShowButton(words.length > 1);
    }
  })

  const setActiveLett = async () => {
    setWords(await handleSetActiveLetter(words, ...keyWrite));
  };

  const handleChangeTileState = (row: number, col: number, state: string) => {
    const newWords = words.map((word, i) =>
      i === row
        ? word.map((letter, j) => (j === col ? { ...letter, state } : letter))
        : word
    );
    setWords(newWords);
  };

  useEffect(() => {
    setTiles(getTiles(size, words));
  }, [words]);

  return (
    <>
      {showResults ? (
        <Words size={size} words={words} />
      ) : (
        <TermoStyles size={size}>
          {tiles.map((line: TileLineProps, idx) => (
            <Row
              key={idx}
              size={size}
              handleChangeTileState={handleChangeTileState}
              row={idx}
              line={line}
            />
          ))}
        </TermoStyles>
      )}
    </>
  );
};

export { Termo };
