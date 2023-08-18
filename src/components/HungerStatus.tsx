import { IAnimal } from '../models/IAnimal';

interface IHungerStatusProps {
  animal: IAnimal;
}

export const HungerStatus = ({ animal }: IHungerStatusProps) => {
  return (
    <div>
      senast matad:
      {animal.isFed ? (
        animal.lastFed
      ) : (
        <p>Det var länge sedan {animal.name} fick mat</p>
      )}
      <p>
        Status: {animal.isFed ? <span>Är mätt</span> : <span>Är hungrig</span>}{' '}
      </p>
    </div>
  );
};
