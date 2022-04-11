import { Keyboard } from "../../../components/Keyboard";
import { Termo } from "../../../components/Termo";
import { useEffect, useState } from "react";
import { ButtonResults } from "../../../components/ButtonResults";
import { Board, BoardProps } from "../../../@types/propsTypes";
import styled from "styled-components";

interface BoardStylesProps {
  board: Board;
}

const BoardsStyles = styled.div<BoardStylesProps>`
  display: grid;
  justify-items: center;
  grid-template-columns: ${props => props.board === 'termo' ? '1fr': '1fr 1fr'};

  grid-gap: 20px;
  margin: auto 0 calc(25vh + 20px);
`;

const Boards = (props: BoardProps) => {
  const { size, board } = props;
  const [showResults, setShowResults] = useState<boolean>(false);
  const [showButton, setShowButton] = useState<boolean>(false);
  const [keyWrite, setKeyWrite] = useState<[string, string]>(["stop", "stop"]);

  useEffect(() => {
    setShowResults(false);
  }, [board])

  const keyboardWrite = async (type: string, newLetter: string = "") => {
    // type === "enter" && setShowButton(true);
    setKeyWrite([type, newLetter]);
  };

  const getBoard = () => {
    switch (board) {
      case "dueto":
        return (
          <>
            <Termo
              key='dueto-1'
              size={size}
              showButton={showButton}
              setShowButton={setShowButton}
              showResults={showResults}
              keyWrite={keyWrite}
            />
            <Termo key='dueto-2' size={size} showResults={showResults} keyWrite={keyWrite} />
          </>
        );
      case "quarteto":
        return (
          <>
            <Termo key='quarteto-1'
              size={size}
              showButton={showButton}
              setShowButton={setShowButton}
              showResults={showResults}
              keyWrite={keyWrite}
            />
            <Termo key='quarteto-2' size={size} showResults={showResults} keyWrite={keyWrite} />
            <Termo key='quarteto-3' size={size} showResults={showResults} keyWrite={keyWrite} />
            <Termo key='quarteto-4' size={size} showResults={showResults} keyWrite={keyWrite} />
          </>
        );
      default:
        return (
          <Termo
            key='termo-1'
            size={size}
            showButton={showButton}
            setShowButton={setShowButton}
            showResults={showResults}
            keyWrite={keyWrite}
          />
        );
    }
  };

  return (
    <>
      {showButton && (
        <ButtonResults
          showResults={showResults}
          setShowResults={setShowResults}
        />
      )}
      <BoardsStyles board={board}>
        {
          getBoard()
        }
      </BoardsStyles>
      <Keyboard setActiveLetter={keyboardWrite} />
    </>
  );
};

export { Boards };
