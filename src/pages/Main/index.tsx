import { useContext, useState } from "react";
import { Header } from "../../components/Header";
import { Keyboard } from "../../components/Keyboard";
import { Termo } from "../../components/Termo";
import { WordsContext } from "../../contexts/wordsProvider";
import { PageStyles } from "./styles";
import { handleSetActiveLetter, initWord } from "./utils/keyboard";

const Main = () => {

  const { words, setWords } = useContext(WordsContext);

  const keyboardWrite = async (type: string, newLetter: string = '') => {
    setWords(await handleSetActiveLetter(words, type, newLetter));
  };

  return (
    <PageStyles>
      <Header />
      <Termo />
      <Keyboard setActiveLetter={keyboardWrite} />
    </PageStyles>
  );
};

export { Main };
