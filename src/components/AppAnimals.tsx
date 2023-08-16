import { IAnimal } from '../models/IAnimal';
import { AppAnimal } from './AppAnimal';

interface IAnimalsProps {
  animals: IAnimal[];
}

export const AppAnimals = ({ animals }: IAnimalsProps) => {
  return (
    <>
      {animals.map((animal) => (
        <div key={animal.id}>
          <AppAnimal animal={animal} />
        </div>
      ))}
    </>
  );
};
