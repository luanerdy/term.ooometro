import { TileProps } from "../../../@types/propsTypes";
import { TileStyles } from "./styles";

const Tile = (props: TileProps) => {
  const { children, state } = props;

  return (
    <TileStyles state={state}>
      <span className="letter">
        {children}
      </span>
    </TileStyles>
  );
}

export { Tile };
