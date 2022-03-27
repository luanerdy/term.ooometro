import axios from 'axios';
import { FullWordParams, WordsParams } from '../@types/paramsTypes';

export const getWords = async (params: WordsParams) => {
  const response = await axios.get(`${import.meta.env.API_URL}/words`, { params });
  return response.data.words;
};

export const getFullWord = async (params: FullWordParams) => {
  const response = await axios.get(`${import.meta.env.API_URL}/words`, { params });
  return response.data.words[0];
};
