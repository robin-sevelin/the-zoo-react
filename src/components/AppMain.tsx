import { useEffect, useState } from 'react';
import { AppAnimals } from './AppAnimals';
import { IAnimal } from '../models/IAnimal';
import { getAnimals } from '../services/DataService';

export const AppMain = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await getAnimals();

      setAnimals(response);
    };

    if (animals.length === 0) {
      getData();
    }
  });

  return (
    <>
      <AppAnimals animals={animals} />
    </>
  );
};
