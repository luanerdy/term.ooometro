import { Letter } from "../../../@types/propsTypes";
import { getFullWord } from "../../../services/wordsApi";

export const initWord = [
  {
    state: 'active',
    letter: ''
  },
  {
    state: 'todo',
    letter: ''
  },
  {
    state: 'todo',
    letter: ''
  },
  {
    state: 'todo',
    letter: ''
  },
  {
    state: 'todo',
    letter: ''
  }
];

export const handleSetActiveLetter = async (words: Letter[][], type: string, newLetter: string = '') => {
  let newWords: Letter[][] = [[]];

  if (type === 'write') {
    newWords = writeLetter(words, newLetter)
  }
  else if (type === 'erase') {
    newWords = eraseLetter(words);
  }
  else if (type === 'enter') {
    newWords = await enterWord(words);
  }

  return newWords;
};

const writeLetter = (words: Letter[][], newLetter: string) => {
  let found = false;

  const newWords = words.map(word => word.map(letter => {
    const state = letter.state === 'active';
    if (state) {
      found = true;
      return { state: 'todo', letter: newLetter };
    }
    if (found) {
      found = false;
      return { ...letter, state: 'active' };
    }
    return letter;
  }));

  return newWords;
};

const enterWord = async (words: Letter[][]) => {
  let valid: any;
  let todos = 0;
  let myWord: string[] = [];


  words.forEach(word => word.forEach(async (letter) => {
    const letterTodo = letter.state === 'todo';

    if (letterTodo) {
      myWord.push(letter.letter);
      todos++;

      if (todos === 5) valid = true;
    }
  }));

  const response = await getFullWord({ first: myWord[0], second: myWord[1], third: myWord[2], fourth: myWord[3], fifth: myWord[4] });
  if(!response) valid = false;

  return valid === true ? [...words.map(word => word.map(letter => ({ ...letter, state: 'wrong' }))), initWord] : words;
};

const eraseLetter = (words: Letter[][]) => {
  let found = false;
  let todos = 0;

  const newWords = words.map(word => word.map((letter, index) => {
    const letterActive = word[index + 1]?.state === 'active';
    const letterTodo = letter.state === 'todo';

    if (letterActive) {
      found = true;
      return { state: 'active', letter: '' };
    }
    else if (found) {
      found = false;
      return { ...letter, state: 'todo' };
    }
    else if (letterTodo) {
      todos++;

      if (todos === 5) {
        return { state: 'active', letter: '' };
      }
    }
    return letter;
  }));

  return newWords;
};