import styled from "styled-components";

const HeaderStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 50px;

  position: fixed;
  top: 0;
  z-index: 1;

  background-color: var(--color-primary);

  h1 {
    font-size: 1em;
    font-weight: 600;
    text-transform: uppercase;

    margin: 0 15px;
    cursor: pointer;

    &.selected {
      color: var(--color-place);
    }
  }
`;

export { HeaderStyles };
