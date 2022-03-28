export const initTiles = (rows: number) => {
  const arr = Array.from({ length: rows }, () => '');
  const word = Array.from({ length: 5 }, () => ({ state: 'undone', letter: '' }));
  return arr.map(() => ({ type: 'undone', word }));
};
