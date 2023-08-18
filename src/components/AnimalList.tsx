import { Link } from 'react-router-dom';
import { IAnimal } from '../models/IAnimal';
import { AppAnimal } from './Animal';

interface IAnimalsProps {
  animals: IAnimal[];
}

export const AnimalList = ({ animals }: IAnimalsProps) => {
  return (
    <>
      {animals.map((animal) => (
        <div key={animal.id}>
          <Link to={'/animals/' + animal.id}>
            <AppAnimal animal={animal} />
          </Link>
        </div>
      ))}
    </>
  );
};
