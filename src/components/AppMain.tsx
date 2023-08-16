import { useEffect, useState } from 'react';
import { AppAnimals } from './AppAnimals';

export const AppMain = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {});
  return (
    <>
      <AppAnimals />
    </>
  );
};
