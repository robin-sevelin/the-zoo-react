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
      fedAnimals.forEach((checkedAnimal) => {
        const isFourHoursPassed = fourHoursPassed(checkedAnimal.lastFed);
        if (isFourHoursPassed) {
          resetFeed(checkedAnimal);
        }
      });
    }
    if (animals.length === 0) {
      getData();
    }
  });

  const resetFeed = (checkedAnimal: IAnimal) => {
    const updatedList = animals.map((animal) => {
      if (animal.id === checkedAnimal.id) {
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
