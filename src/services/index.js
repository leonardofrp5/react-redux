import axios from 'axios';

const baseURL = 'https://rickandmortyapi.com/api/character';

export const getCharacters = async () => {
  const res = await axios.get(baseURL);
  return res.data;
};
