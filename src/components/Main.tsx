import { useEffect } from 'react';
import { getAnimals } from '../services/DataService';
import { useLocalStorage } from '../hooks/useStorage';
import { IAnimal } from '../models/IAnimal';
import { AnimalList } from './AnimalList';
import { fourHoursPassed } from '../services/TimeService';

export const Main = () => {
  const [animals, setAnimals] = useLocalStorage<IAnimal[]>('animals', []);

  useEffect(() => {
    const fedAnimals = animals.filter((animal) => animal.isFed === true);
    if (fedAnimals) {
      fedAnimals.forEach((filteredAnimal) => {
        const isFourHoursPassed = fourHoursPassed(filteredAnimal.lastFed);
        if (isFourHoursPassed) {
          resetFeed(filteredAnimal);
        }
      });
    }
    if (animals.length === 0) {
      getData();
    }
  });

  const resetFeed = (filteredAnimal: IAnimal) => {
    const updatedList = animals.map((animal) => {
      if (animal.id === filteredAnimal.id) {
        return {
          ...animal,
          isFed: false,
        };
      }
      return animal;
    });
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
