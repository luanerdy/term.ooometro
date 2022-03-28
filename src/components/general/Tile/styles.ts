import styled from "styled-components";

const switchColor = (type: string = '') => {
  switch (type) {
    case 'active':
      return 'var(--color-active)';
    default:
      return 'var(--color-undone)';
  }
};

const TileStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: calc((50vh - (5 * 2px)) / 6);
  aspect-ratio: 1;

  margin: 2px;
  border-radius: 10%;

  background-color: ${props => switchColor()};

  cursor: pointer;

  .letter {
    text-transform: uppercase;

    font-size: 2em;
    font-weight: 600;
  }
`;

export { TileStyles };
