import { useEffect } from 'react';

import { getAnimals } from '../services/DataService';
import { useLocalStorage } from '../hooks/localStorage';
import { IAnimal } from '../models/IAnimal';
import { AnimalList } from './AnimalList';

export const Main = () => {
  const [animals, setAnimals] = useLocalStorage<IAnimal[]>('animals', []);

  useEffect(() => {
    if (animals.length === 0) {
      getData();
    }
  });

  const getData = async () => {
    const response = await getAnimals();
    setAnimals(response);
  };

  const clickAnimal = async (animal: IAnimal) => {
    console.log(animal.id);
  };

  return (
    <>
      <AnimalList animals={animals} onClickAnimal={clickAnimal} />
    </>
  );
};
