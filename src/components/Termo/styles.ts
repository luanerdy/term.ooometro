import styled from "styled-components";

interface TermoStylesProps {
  size: number;
}

const TermoStyles = styled.div<TermoStylesProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;

  aspect-ratio: 5/${props => props.size};

  /* margin: auto 0 calc(25vh + 20px); */
`;

export { TermoStyles };
