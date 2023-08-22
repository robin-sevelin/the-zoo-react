import { DateTime } from 'luxon';
import { IAnimal } from '../models/IAnimal';

export const feedAnimal = (animalIndex: number, animals: IAnimal[]) => {
  const updatedList = animals.map((animal, index) => {
    if (index === animalIndex) {
      return {
        ...animal,
        isFed: true,
        lastFed: DateTime.now().toString(),
      };
    }
    return animal;
  });

  return updatedList;
};
