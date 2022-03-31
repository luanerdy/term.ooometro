import { Letter } from "../../@types/propsTypes";

export const getTiles = (rows: number, words: Letter[][]) => {
  const length = words.length;
  const arr = Array.from({ length: rows }, () => '');
  const wordUndone = Array.from({ length: 5 }, () => ({ state: 'undone', letter: '' }));
  // const wordDoing = Array.from({ length: 5 }, (_, idx) => {
  //   return { state: idx === 0 ? 'active' : 'todo', letter: '' }
  // });

  return arr.map((_, idx) => {
    return (
      idx < length - 1 ?
        { type: 'done', word: words[idx] } : (
          idx === length - 1 ?
            { type: 'doing', word: words[idx] } :
            { type: 'undone', word: wordUndone })
    );
  });
};
