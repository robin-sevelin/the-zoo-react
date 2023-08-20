import { useEffect, useState } from 'react';
import { IAnimal } from '../models/IAnimal';
import { threeHoursPassed } from '../services/TimeService';

interface IHungerStatusProps {
  animal: IAnimal;
}

export const HungerStatus = ({ animal }: IHungerStatusProps) => {
  const [threeHours, setThreeHours] = useState(false);

  useEffect(() => {
    if (animal.isFed) {
      const isThreeHoursPassed = threeHoursPassed(animal.lastFed);

      if (isThreeHoursPassed) {
        setThreeHours(isThreeHoursPassed);
      }
    }
  }, [threeHours, animal.isFed, animal.lastFed]);

  return (
    <>
      {animal.isFed && !threeHours && <span>Är mätt</span>}
      {!animal.isFed && <span>Är hungrig</span>}
      {threeHours && animal.isFed && <span>Börjar bli hungrig</span>}
    </>
  );
};
