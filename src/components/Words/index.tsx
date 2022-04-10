import { useEffect, useState } from "react";
import { WordsProps } from "../../@types/propsTypes";
import { getWords } from "../../services/wordsApi";
import { WordsStyles } from "./styles";
import { getParams } from "./utils";

const Words = (props: WordsProps) => {
  const { words, size } = props;
  const [suggestions, setSuggestions] = useState([]);

  const handleGetSuggestions = () => {
    const params = getParams(words);

    const setNewSuggestions = async () => {
      const newSuggestions = await getWords(params);
      setSuggestions(newSuggestions);
    }

    setNewSuggestions();
  }

  useEffect(handleGetSuggestions, []);

  return (
    <WordsStyles size={size}>
      <h2>Palavras Sugeridas:</h2>
      <div className="words">
        {
          suggestions.map((suggestion, idx) => <p key={idx}>{suggestion}</p>)
        }
      </div>
    </WordsStyles>
  );
};

export { Words };
