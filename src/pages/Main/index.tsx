import { useContext, useState } from "react";
import { ButtonResults } from "../../components/ButtonResults";
import { Header } from "../../components/Header";
import { Keyboard } from "../../components/Keyboard";
import { Termo } from "../../components/Termo";
import { Words } from "../../components/Words";
import { WordsContext } from "../../contexts/wordsProvider";
import { PageStyles } from "./styles";
import { handleSetActiveLetter } from "./utils/keyboard";

const Main = () => {
  const { words, setWords } = useContext(WordsContext);
  const [showResults, setShowResults] = useState<boolean>(false);

  const keyboardWrite = async (type: string, newLetter: string = "") => {
    setWords(await handleSetActiveLetter(words, type, newLetter));
  };

  return (
    <PageStyles>
      <Header />
      {words.length > 1 && (
        <ButtonResults
          showResults={showResults}
          setShowResults={setShowResults}
        />
      )}
      {showResults ? (
        <Words />
      ) : (
        <>
          <Termo />
          <Keyboard setActiveLetter={keyboardWrite} />
        </>
      )}
    </PageStyles>
  );
};

export { Main };
