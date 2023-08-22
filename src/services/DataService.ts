import { IAnimal } from '../models/IAnimal';
import { get } from './DataServiceBase';

const BASE_URL = 'https://animals.azurewebsites.net/api/animals';

export const getAnimals = async (): Promise<IAnimal[]> => {
  return await get<IAnimal[]>(BASE_URL);
};
