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

  const clickAnimal = async (id: number) => {
    const response = await getAnimal(id);

    localStorage.setItem('clickedAnimal', JSON.stringify(response));

    const clickedAnimal = localStorage.getItem('clickedAnimal');

    if (clickedAnimal) {
      const parsed = JSON.parse(clickedAnimal);
      localStorage.setItem('animalId', JSON.stringify(parsed.id));
    }
  };

  return (
    <>
      <AppAnimals animals={animals} onFeed={feed} onClickAnimal={clickAnimal} />
    </>
  );
};
