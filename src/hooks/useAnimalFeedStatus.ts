import { useEffect } from 'react';
import { IAnimal } from '../models/IAnimal';

export const useAnimalFeedStatus = (
  checkFedAnimals: () => void,
  foundAnimal: IAnimal
) => {
  useEffect(() => {
    if (foundAnimal.isFed) {
      checkFedAnimals();
    }
  });
};
