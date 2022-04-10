import { ReactChild } from "react";
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
  size: number;
};

interface ChangeTileStylesProps {
  children?: ReactChild;
  size: number;
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
  position: relative;

  width: calc((min(50vh, 102vw) - ((${props => props.size} - 1) * 2px)) / ${props => props.size});
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

const ChangeStateStyles = styled.div<ChangeTileStylesProps>`
  position: absolute;
  z-index: 1;

  .tile {
    position: relative;

    &:first-child {
      bottom: calc((calc((min(50vh, 102vw) - ((${props => props.size} - 1) * 2px)) / ${props => props.size}) / 2) + 2px);
    }

    &:last-child {
      top: calc((calc((min(50vh, 102vw) - ((${props => props.size} - 1) * 2px)) / ${props => props.size}) / 2) + 2px);
    }
  }
`;

export { TileStyles, ChangeStateStyles };
