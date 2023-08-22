import { IAnimal } from '../models/IAnimal';

export const updateAnimalList = (
  animals: IAnimal[],
  animalToUpdate: IAnimal,
  animalId: number
) => {
  return animals.map((animal, index) => {
    if (index === animalId) {
      return animalToUpdate;
    }
    return animal;
  });
};
