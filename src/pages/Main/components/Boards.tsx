import { Keyboard } from "../../../components/Keyboard";
import { Termo } from "../../../components/Termo";
import { Words } from "../../../components/Words";
import { useState } from "react";
import { ButtonResults } from "../../../components/ButtonResults";
import { initWord } from "../utils/keyboard";
import { BoardProps, Letter } from "../../../@types/propsTypes";
import { handleSetActiveLetter } from "../utils/keyboard";

const Boards = (props: BoardProps) => {
  const { size } = props;
  const [showResults, setShowResults] = useState<boolean>(false);
  const [words, setWords] = useState<Letter[][]>([initWord]);

  const keyboardWrite = async (type: string, newLetter: string = "") => {
    setWords(await handleSetActiveLetter(words, type, newLetter));
  };

  const handleChangeTileState = (row: number, col: number, state: string) => {
    const newWords = words.map((word, i) => i === row ? word.map((letter, j) => j === col ? {...letter, state} : letter) : word);
    setWords(newWords);
  };

  return (
    <>
      {words.length > 1 && (
        <ButtonResults
          showResults={showResults}
          setShowResults={setShowResults}
        />
      )}
      {showResults ? (
        <Words size={size} words={words} />
      ) : (
        <>
          <Termo size={size} words={words} handleChangeTileState={handleChangeTileState} />
          <Keyboard setActiveLetter={keyboardWrite} />
        </>
      )}
    </>
  );
};

export { Boards };
