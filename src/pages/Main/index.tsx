import { useState } from "react";
import { Header } from "../../components/Header";
import { Keyboard } from "../../components/Keyboard";
import { Termo } from "../../components/Termo";
import { PageStyles } from "./styles";
import { handleSetActiveLetter, initWord } from "./utils/keyboard";

const Main = () => {
  const [words, setWords] = useState([initWord]);

  const handleSetNewWord = (row: number, col: number) => {

  };

  const keyboardWrite = async (type: string, newLetter: string = '') => {
    setWords(await handleSetActiveLetter(words, type, newLetter));
  };

  return (
    <PageStyles>
      <Header />
      <Termo words={words} />
      <Keyboard setActiveLetter={keyboardWrite} />
    </PageStyles>
  );
};

export { Main };
