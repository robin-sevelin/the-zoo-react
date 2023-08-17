import { Link } from 'react-router-dom';
import { IAnimal } from '../models/IAnimal';
import { AppAnimal } from './AppAnimal';

interface IAnimalsProps {
  animals: IAnimal[];
  onFeed: (id: number) => void;
  onClickAnimal: (id: number) => void;
}

export const AppAnimals = ({
  animals,
  onFeed,
  onClickAnimal,
}: IAnimalsProps) => {
  const feed = (id: number) => {
    onFeed(id);
  };

  const clickAnimal = (id: number) => {
    onClickAnimal(id);
  };
  return (
    <>
      {animals.map((animal) => (
        <div key={animal.id}>
          <Link to={'/animals/' + localStorage.getItem('animalId')}>
            <AppAnimal
              animal={animal}
              onFeed={feed}
              onClickAnimal={clickAnimal}
            />
          </Link>
        </div>
      ))}
    </>
  );
};
