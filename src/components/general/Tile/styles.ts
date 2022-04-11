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
    border: ${props => ['active', 'todo'].includes(props.state) ? (props.size === 6 ? '0.25em solid var(--color-secondary)' : '0.125em solid var(--color-secondary)') : 'none'};
    border-bottom: ${props => props.state === 'active' ? (props.size === 6 ? '0.6em solid var(--color-secondary)' : '0.3em solid var(--color-secondary)') : ''};

  `;

const TileStyles = styled.div<TileStylesProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: calc((min(${props => props.size === 6 ? '50vh' : '25vh'}, ${props => props.size === 6 ? '102vw' : '51vw'}) - ((${props => props.size === 6 ? 6 : 7} - 1) * 2px)) / ${props => props.size === 6 ? 6 : 7});
  aspect-ratio: 1;

  margin: 2px;
  border-radius: 10%;

  ${tileState};

  cursor: pointer;

  .letter {
    text-transform: uppercase;

    font-size: ${props => props.size === 6 ? '2em' : '1em'};
    font-weight: 600;
  }
`;

const ChangeStateStyles = styled.div<ChangeTileStylesProps>`
  position: absolute;
  z-index: 1;

  .tile {
    position: relative;

    &:first-child {
      bottom: calc((calc((min(${props => props.size === 6 ? '50vh' : '25vh'}, ${props => props.size === 6 ? '102vw' : '51vw'}) - ((${props => props.size === 6 ? 6 : 7} - 1) * 2px)) / ${props => props.size === 6 ? 6 : 7}) / 2) + 2px);
    }

    &:last-child {
      top: calc((calc((min(${props => props.size === 6 ? '50vh' : '25vh'}, ${props => props.size === 6 ? '102vw' : '51vw'}) - ((${props => props.size === 6 ? 6 : 7} - 1) * 2px)) / ${props => props.size === 6 ? 6 : 7}) / 2) + 2px);
    }
  }
`;

export { TileStyles, ChangeStateStyles };
