import { IAnimal } from '../models/IAnimal';

interface IAnimalProps {
  animal: IAnimal;
}

export const AppAnimal = ({ animal }: IAnimalProps) => {
  return (
    <div>
      <h3>{animal.name}</h3>
    </div>
  );
};
