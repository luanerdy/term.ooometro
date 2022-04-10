import { useEffect, useState } from "react";
import { Board } from "../../@types/propsTypes";
import { Header } from "../../components/Header";
import { Boards } from "./components/Boards";
import { PageStyles } from "./styles";

const Main = () => {
  const [board, setBoard] = useState<Board>('termo');
  const [size, setSize] = useState(6);

  useEffect(() => {
    switch (board) {
      case 'dueto':
        setSize(7);
        break;
      case 'quarteto':
        setSize(9);
        break;
      default:
        setSize(6);
        break;
    }
  }, [board]);

  return (
    <PageStyles>
      <Header board={board} setBoard={setBoard} />
      <Boards size={size} />
    </PageStyles>
  );
};

export { Main };
