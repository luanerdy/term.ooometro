import { ButtonResultProps } from "../../@types/propsTypes";
import { ButtonResultStyles } from "./styles";

const ButtonResults = (props: ButtonResultProps) => {
  const {showResults, setShowResults} = props;
  return (
    <ButtonResultStyles onClick={() => setShowResults(!showResults)}>
      {showResults ? '<= Voltar' : 'Ver Sugestões =>'}
    </ButtonResultStyles>
  );
};

export { ButtonResults };
