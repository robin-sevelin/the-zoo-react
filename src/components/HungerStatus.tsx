import { IAnimal } from '../models/IAnimal';

interface IHungerStatusProps {
  animal: IAnimal;
}

export const HungerStatus = ({ animal }: IHungerStatusProps) => {
  return (
    <div>
      <p>
        Status: {animal.isFed ? <span>Är mätt</span> : <span>Är hungrig</span>}{' '}
      </p>
    </div>
  );
};
