import { useEffect, useLayoutEffect, useState } from "react";
import { Board } from "../../@types/propsTypes";
import { Header } from "../../components/Header";
import { Boards } from "./components/Boards";
import { PageStyles } from "./styles";

const Main = () => {
  const [board, setBoard] = useState<Board>('termo');
  const [size, setSize] = useState(6);

  return (
    <PageStyles board={board}>
      <Header board={board} setBoard={setBoard} setSize={setSize} />
      <Boards size={size} board={board} />
    </PageStyles>
  );
};

export { Main };
