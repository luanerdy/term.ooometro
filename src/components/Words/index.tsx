import { useEffect, useState } from "react";
import { WordsStyles } from "./styles";

const Words = () => {
  const [suggestions, setSuggestions] = useState(['teste', 'teste', 'teste', 'teste', 'teste']);

  useEffect(() => {

  }, []);

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
