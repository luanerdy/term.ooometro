import styled from "styled-components";

interface WordsStylesProps {
  size: number;
}

const WordsStyles = styled.div<WordsStylesProps>`
  display: flex;
  flex-flow: column nowrap;

  height: 50vh;
  max-height: 102vw;
  max-width: calc(100% - 20px);
  aspect-ratio: 5/${props => props.size};
  overflow-y: scroll;
  overflow-x: hidden;

  margin: auto 0 calc(25vh + 20px);

  text-align: left;

  .words {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    margin: 10px 0 0;
  }
`;

export { WordsStyles };
