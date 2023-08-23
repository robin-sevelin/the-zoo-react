import { useEffect } from 'react';
import { IAnimal } from '../models/IAnimal';

export const useAnimalData = (
  animals: IAnimal[],
  getData: () => void,
  checkFedAnimals: () => void
) => {
  useEffect(() => {
    if (animals.length === 0) {
      getData();
    }
    checkFedAnimals();
  }, [animals, getData, checkFedAnimals]);
};
