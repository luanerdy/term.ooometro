import styled from "styled-components";

interface PageStylesProps {
  board?: 'termo' | 'dueto' | 'quarteto';
}

const PageStyles = styled.main<PageStylesProps>`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  position: relative;

  width: 100%;
  max-width: 720px;
  /* height: 100%; */

  margin: 40px auto 0;
  padding: 20px;

  text-align: center;

  .board {
    display: grid;
    grid-template-columns: ${props => props.board === 'termo' ? '1fr' : '1fr 1fr'};

    align-items: start;
  }
`;

export { PageStyles };
