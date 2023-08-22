import { IAnimal } from '../models/IAnimal';

export const resetFeed = (foundAnimal: IAnimal, animals: IAnimal[]) => {
  const updatedList = animals.map((animal) => {
    if (animal.id === foundAnimal.id) {
      return {
        ...animal,
        isFed: false,
      };
    }
    return animal;
  });
  return updatedList;
};
