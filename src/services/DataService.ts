import axios from 'axios';

const BASE_URL = 'https://animals.azurewebsites.net/api/animals';

export const getAnimals = async () => {
  const response = await axios.get(BASE_URL);

  return response.data;
};
