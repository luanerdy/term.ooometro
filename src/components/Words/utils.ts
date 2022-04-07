import { WordsParams } from "../../@types/paramsTypes";
import { Letter } from "../../@types/propsTypes";

export const getParams = (words: Letter[][]) => {
  const letras: string[] = [];
  const params: WordsParams = {
    nones: '',
    fifthNones: '',
    fourthNones: '',
    thirdNones: '',
    secondNones: '',
    firstNones: '',
    maybes: '',
  };

  words.forEach(word => word.forEach((letter, index) => {
    const letra = letter.letter.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    const state = letter.state;

    if(!['right', 'place'].includes(state)) return;

    letras.push(letra);

    if(state === 'right') {

      switch(index) {
        case 0:
          params.first = letra;
          break;
        case 1:
          params.second = letra;
          break;
        case 2:
          params.third = letra;
          break;
        case 3:
          params.fourth = letra;
          break;
        case 4:
          params.fifth = letra;
          break;
      }
    }

    if(state === 'place') {
      if(!params.maybes?.includes(letra)) params.maybes += letra;

      switch(index) {
        case 0:
          params.firstNones += letra;
          break;
        case 1:
          params.secondNones += letra;
          break;
        case 2:
          params.thirdNones += letra;
          break;
        case 3:
          params.fourthNones += letra;
          break;
        case 4:
          params.fifthNones += letra;
          break;
      }
    }
  }));

  words.forEach(word => word.forEach(letter => {
    const letra = letter.letter.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    const state = letter.state;

    if(state !== 'wrong' || letras.includes(letra)) return;

    params.nones += letra;
  }));

  return params;
}