import { useEffect, useState } from 'react';
import { AppAnimals } from './AppAnimals';
import { IAnimal } from '../models/IAnimal';
import { getAnimal, getAnimals } from '../services/DataService';

export const AppMain = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    const storedAnimals = localStorage.getItem('animals');
    if (storedAnimals) {
      setAnimals(JSON.parse(storedAnimals));
    } else {
      getData();
    }
  }, []);

  const getData = async () => {
    const response = await getAnimals();
    const foo = await getAnimal(3);
    console.log(foo);

    localStorage.setItem('animals', JSON.stringify(response));
    setAnimals(response);
  };

  const feed = (id: number) => {
    const updatedAnimals = animals.map((animal) => {
      if (animal.id === id) {
        return { ...animal, isFed: true, lastFed: new Date().toString() };
      } else {
        return animal;
      }
    });

    setAnimals(updatedAnimals);
    localStorage.setItem('animals', JSON.stringify(updatedAnimals));
  };

  return (
    <>
      {animals.some((animal) => !animal.isFed) && (
        <h3>vissa djur är hungriga</h3>
      )}
      <AppAnimals animals={animals} onFeed={feed} />
    </>
  );
};
