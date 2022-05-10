import axios from 'axios';

const baseURL = 'https://rickandmortyapi.com/api/character';
const baseURLContries = 'http://localhost:3000/countries';

export const getCharacters = async () => {
  const res = await axios.get(baseURL);
  return res.data;
};

export const getContries = async () => {
  const res = await axios.get(baseURLContries);
  return res.data;
};
