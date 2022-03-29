import styled, { css } from "styled-components";

const switchColor = (type: string = '') => {
  switch (type) {
    case 'undone':
      return 'var(--color-undone)';
    case 'right':
      return 'var(--color-right)';
    case 'place':
      return 'var(--color-place)';
    case 'wrong':
      return 'var(--color-wrong)';
    default:
      return 'var(--color-active)';
  }
};

interface TileStylesProps {
  state: string;
};

  const tileState = css<TileStylesProps>`
    background-color: ${props => switchColor(props.state)};
    border: ${props => ['active', 'todo'].includes(props.state) ? '0.25em solid var(--color-secondary)' : 'none'};
    border-bottom: ${props => props.state === 'active' ? '0.6em solid var(--color-secondary)' : ''};

  `;

const TileStyles = styled.div<TileStylesProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: calc((min(50vh, 102vw) - (5 * 2px)) / 6);
  aspect-ratio: 1;

  margin: 2px;
  border-radius: 10%;

  ${tileState};

  cursor: pointer;

  .letter {
    text-transform: uppercase;

    font-size: 2em;
    font-weight: 600;
  }
`;

export { TileStyles };
