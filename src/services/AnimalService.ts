import { DateTime } from 'luxon';
import { IAnimal } from '../models/IAnimal';
import { updateAnimalList } from './AnimalServiceBase';

export const feedAnimal = (animalIndex: number, animals: IAnimal[]) => {
  const updatedAnimal = {
    ...animals[animalIndex],
    isFed: true,
    lastFed: DateTime.now().toString(),
  };
  return updateAnimalList(animals, updatedAnimal, animalIndex);
};

export const resetFeed = (animalToUpdate: IAnimal, animals: IAnimal[]) => {
  const updatedAnimal = { ...animalToUpdate, isFed: false };
  const indexToUpdate = animals.findIndex(
    (animal) => animal.id === animalToUpdate.id
  );
  return updateAnimalList(animals, updatedAnimal, indexToUpdate);
};
