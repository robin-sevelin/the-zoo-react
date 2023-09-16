import { Dispatch, createContext } from 'react';
import { IAnimal } from '../models/IAnimal';
import { IAnimalsAction } from '../reducer/AnimalsReducer';

export interface IAnimalContext {
  animals: IAnimal[];
  dispatch: Dispatch<IAnimalsAction>;
}

export const AnimalsContext = createContext<IAnimalContext>({
  animals: [],
  dispatch: () => {},
});
