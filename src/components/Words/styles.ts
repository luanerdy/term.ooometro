import styled from "styled-components";

interface WordsStylesProps {
  size: number;
}

const WordsStyles = styled.div<WordsStylesProps>`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-flow: column nowrap;

  aspect-ratio: 5/${props => props.size};

  text-align: left;

  .words {
    display: grid;
    grid-template-columns: ${props => props.size === 6 ? '1fr 1fr 1fr 1fr' : '1fr 1fr'};
    grid-gap: 5px 15px;

    max-height: ${props => props.size === 9 ? '25vh' : '40vh'};
    overflow-y: scroll;

    margin: 10px 0 0;
  }
`;

export { WordsStyles };
