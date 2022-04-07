import { useContext, useEffect, useState } from "react";
import { WordsParams } from "../../@types/paramsTypes";
import { WordsContext } from "../../contexts/wordsProvider";
import { getWords } from "../../services/wordsApi";
import { WordsStyles } from "./styles";
import { getParams } from "./utils";

const Words = () => {
  const { words } = useContext(WordsContext);
  const [suggestions, setSuggestions] = useState([]);

  const handleGetSuggestions = () => {
    const params = getParams(words);
    console.log(params);

    const setNewSuggestions = async () => {
      const newSuggestions = await getWords(params);
      setSuggestions(newSuggestions);
    }

    setNewSuggestions();
  }

  useEffect(handleGetSuggestions, []);

  return (
    <WordsStyles>
      <h2>Palavras Sugeridas:</h2>
      <div className="words">
        {
          suggestions.map(suggestion => <p>{suggestion}</p>)
        }
      </div>
    </WordsStyles>
  );
};

export { Words };
