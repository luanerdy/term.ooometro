import { TileProps } from "../../../@types/propsTypes";
import { TileStyles } from "./styles";

const Tile = (props: TileProps) => {
  const { children } = props;

  return (
    <TileStyles>
      <span className="letter">
        {children}
      </span>
    </TileStyles>
  );
}

export { Tile };
