import { useEffect, useState } from 'react';
import { getAnimals } from '../services/DataService';
import { useLocalStorage } from '../hooks/useStorage';
import { IAnimal } from '../models/IAnimal';
import { AnimalList } from './AnimalList';
import { fourHoursPassed } from '../services/TimeService';
import { resetFeed } from '../services/AnimalService';

export const Main = () => {
  const [animals, setAnimals] = useLocalStorage<IAnimal[]>('animals', []);
  const [error, setError] = useState(false);

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
    try {
      const response = await getAnimals();
      setAnimals(response);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <AnimalList animals={animals} />
      {error && (
        <h2 style={{ color: 'red', fontSize: '2rem' }}>
          Lyckades inte hämta djuren 😢
        </h2>
      )}
    </>
  );
};
