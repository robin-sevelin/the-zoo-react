import { IAnimal } from '../models/IAnimal';
import { fourHoursPassed } from '../services/TimeService';

export const useCheckFedAnimals = (
  animals: IAnimal[],
  reset: (animal: IAnimal) => void
) => {
  const fedAnimals = animals.filter((animal) => animal.isFed === true);
  if (fedAnimals) {
    fedAnimals.forEach((filteredAnimal) => {
      const isFourHoursPassed = fourHoursPassed(filteredAnimal.lastFed);

      if (isFourHoursPassed) {
        reset(filteredAnimal);
      }
    });
  }
};
