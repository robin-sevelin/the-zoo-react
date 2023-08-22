import { useEffect } from 'react';
import { getAnimals } from '../services/DataService';
import { useLocalStorage } from '../hooks/useStorage';
import { IAnimal } from '../models/IAnimal';
import { AnimalList } from './AnimalList';
import { fourHoursPassed } from '../services/TimeService';
import { resetFeed } from '../services/AnimalService';

export const Main = () => {
  const [animals, setAnimals] = useLocalStorage<IAnimal[]>('animals', []);

  useEffect(() => {
    if (animals.length === 0) {
      getData();
    }
    checkFedAnimals();
  });

  const checkFedAnimals = () => {
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

  const reset = (foundAnimal: IAnimal) => {
    const updatedList = resetFeed(foundAnimal, animals);
    setAnimals(updatedList);
  };

  const getData = async () => {
    const response = await getAnimals();
    setAnimals(response);
  };

  return (
    <>
      <AnimalList animals={animals} />
    </>
  );
};
