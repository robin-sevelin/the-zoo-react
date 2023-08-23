import axios from 'axios';

export const get = async <T>(url: string) => {
  try {
    const response = await axios.get<T>(`${url}`);
    return response.data;
  } catch (error) {
    console.error('lyckades inte hämta data', error);
    throw error;
  }
};
