import { IAnimal } from '../models/IAnimal';
import { AppAnimal } from './AppAnimal';

interface IAnimalsProps {
  animals: IAnimal[];
  onFeed: (id: number) => void;
}

export const AppAnimals = ({ animals, onFeed }: IAnimalsProps) => {
  const feed = (id: number) => {
    onFeed(id);
  };
  return (
    <>
      {animals.map((animal) => (
        <div key={animal.id}>
          <AppAnimal animal={animal} onFeed={feed} />
        </div>
      ))}
    </>
  );
};
