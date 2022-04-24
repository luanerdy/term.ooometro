import { useEffect, useState } from "react";
import { Letter, TermoProps, TileLineProps } from "../../@types/propsTypes";
import { ThreeDots } from  'react-loader-spinner';
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
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (keyWrite[0] === "stop") return;
    setActiveLett();
  }, [keyWrite]);

  useEffect(() => {
    const showButton = props.showButton;
    const setShowButton = props.setShowButton || (() => null);

    if (showButton !== undefined) {
      setShowButton(words.length > 1);
    }
  });

  const setActiveLett = async () => {
    keyWrite[0] === "enter" && setLoading(true);
    const newAtiveLetters = await handleSetActiveLetter(words, ...keyWrite);
    setLoading(false);
    setWords(newAtiveLetters);
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
          {tiles.map((line: TileLineProps, idx) =>
            (loading && line.word[0].state === 'todo') ? (
              <ThreeDots color="var(--color-wrong)" height={50} width={80} />
            ) : (
              <Row
                key={idx}
                size={size}
                handleChangeTileState={handleChangeTileState}
                row={idx}
                line={line}
              />
            )
          )}
        </TermoStyles>
      )}
    </>
  );
};

export { Termo };
