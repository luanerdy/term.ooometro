import { useState } from "react";
import { TileProps } from "../../../@types/propsTypes";
import { TileStyles, ChangeStateStyles } from "./styles";

const Tile = (props: TileProps) => {
  const [showChangeTiles, setShowChangeTiles] = useState(false);
  const { children, state, pair: {row, col}, handleChangeTileState } = props;

  const changeTileState = (newState: string) => {
    if(['active', 'todo', 'undone'].includes(state)) return;

    handleChangeTileState(row, col, newState);
  }

  return (
      <TileStyles state={state} onClick={() => setShowChangeTiles(!showChangeTiles)}>
        <span className="letter">
          {children}
        </span>
      {
        (!['active', 'todo', 'undone'].includes(state) && showChangeTiles) &&
        <ChangeStateStyles>
          {state !== 'right' && <TileStyles onClick={() => changeTileState('right')} className="tile" state='right' />}
          {state !== 'place' && <TileStyles onClick={() => changeTileState('place')} className="tile" state='place' />}
          {state !== 'wrong' && <TileStyles onClick={() => changeTileState('wrong')} className="tile" state='wrong' />}
        </ChangeStateStyles>
      }
      </TileStyles>
  );
}

export { Tile };
