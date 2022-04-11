import { HeaderProps } from "../../@types/propsTypes";
import { HeaderStyles } from "./styles";

const Header = (props: HeaderProps) => {
  const { board, setBoard, setSize } = props;

  return (
    <HeaderStyles>
      <h1 className={board === 'termo' ? 'selected' : ''} onClick={() => {setBoard('termo'); setSize(6)}}>
        termo
      </h1>
      <h1 className={board === 'dueto' ? 'selected' : ''} onClick={() => {setBoard('dueto'); setSize(7)}}>
        dueto
      </h1>
      <h1 className={board === 'quarteto' ? 'selected' : ''} onClick={() => {setBoard('quarteto'); setSize(9)}}>
        quarteto
      </h1>
    </HeaderStyles>
  );
};

export { Header };
