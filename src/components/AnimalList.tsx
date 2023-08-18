import { Link } from 'react-router-dom';
import { IAnimal } from '../models/IAnimal';
import { AppAnimal } from './Animal';

interface IAnimalsProps {
  animals: IAnimal[];
  onClickAnimal: (animal: IAnimal) => void;
}

export const AnimalList = ({
  animals,

  onClickAnimal,
}: IAnimalsProps) => {
  const clickAnimal = (animal: IAnimal) => {
    onClickAnimal(animal);
  };
  return (
    <>
      {animals.map((animal) => (
        <div key={animal.id}>
          <Link to={'/animals/' + 1}>
            <AppAnimal animal={animal} onClickAnimal={clickAnimal} />
          </Link>
        </div>
      ))}
    </>
  );
};
