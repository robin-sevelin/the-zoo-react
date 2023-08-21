import { useEffect, useState } from 'react';
import { IAnimal } from '../models/IAnimal';
import { threeHoursPassed } from '../services/TimeService';

interface IHungerStatusProps {
  animal: IAnimal;
}

export const HungerStatus = ({ animal }: IHungerStatusProps) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (animal.isFed) {
      const isThreeHoursPassed = threeHoursPassed(animal.lastFed);

      if (animal.isFed && !isThreeHoursPassed) {
        setMessage('Är mätt');
      } else {
        setMessage('Börjar bli hungrig');
      }
    } else {
      setMessage('Är hungrig');
    }
  }, [animal.isFed, animal.lastFed]);

  return (
    <>
      <span>{message}</span>
    </>
  );
};
