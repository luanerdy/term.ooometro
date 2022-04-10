import { useState } from "react";
import { TileProps } from "../../../@types/propsTypes";
import { TileStyles, ChangeStateStyles } from "./styles";

const Tile = (props: TileProps) => {
  const [showChangeTiles, setShowChangeTiles] = useState(false);
  const {
    children,
    size,
    state,
    pair: { row, col },
    handleChangeTileState,
  } = props;

  const changeTileState = (newState: string) => {
    if (["active", "todo", "undone"].includes(state)) return;

    handleChangeTileState(row, col, newState);
  };

  return (
    <TileStyles
      size={size}
      state={state}
      onClick={() => setShowChangeTiles(!showChangeTiles)}
    >
      <>
        <span className="letter">{children}</span>
        {!["active", "todo", "undone"].includes(state) && showChangeTiles && (
          <ChangeStateStyles size={size}>
            <>
              {state !== "right" && (
                <TileStyles
                  size={size}
                  onClick={() => changeTileState("right")}
                  className="tile"
                  state="right"
                />
              )}
              {state !== "place" && (
                <TileStyles
                  size={size}
                  onClick={() => changeTileState("place")}
                  className="tile"
                  state="place"
                />
              )}
              {state !== "wrong" && (
                <TileStyles
                  size={size}
                  onClick={() => changeTileState("wrong")}
                  className="tile"
                  state="wrong"
                />
              )}
            </>
          </ChangeStateStyles>
        )}
      </>
    </TileStyles>
  );
};

export { Tile };
