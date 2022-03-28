import styled from "styled-components";

const KeyboardStyles = styled.div`
  display: flex;
  flex-flow: column nowrap;

  width: calc(100% - 20px);
  height: 25vh;

  margin: 0 0 10px;

  position: absolute;
  bottom: 0;

  .line {
    display: flex;

    height: 33%;

    .letter {
      border: none;
      border-radius: 5px;

      margin: 0.125em;
      width: 10%;

      color: var(--color-white);
      background-color: var(--color-secondary);

      text-transform: uppercase;
      font-size: 1em;
      font-weight: 600;

      cursor: pointer;

      transition: .3s;

      &:active {
        color: var(--color-secondary);
        background-color: var(--color-white);

        box-shadow: 0 0 10px rgba(255, 255, 255, .5)
      }

      &.enter {
        flex-grow: 3;
      }
    }
  }
`;

export { KeyboardStyles };
