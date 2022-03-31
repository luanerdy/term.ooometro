import axios from 'axios';
import { FullWordParams, WordsParams } from '../@types/paramsTypes';

export const getWords = async (params: WordsParams) => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/words`, { params });
  return response.data.words;
};

export const getFullWord = async (params: FullWordParams) => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/words`, { params });
  const word = response.data.words.length > 0 ? response.data.words[0] : '';

  return word;
};
