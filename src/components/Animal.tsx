import { IAnimal } from '../models/IAnimal';
import { threeHoursPassed } from '../services/TimeService';
import { HungerStatus } from './HungerStatus';

interface IAnimalProps {
  animal: IAnimal;
}

export const AppAnimal = ({ animal }: IAnimalProps) => {
  let className = animal.isFed ? 'green' : 'red';

  if (animal.isFed && threeHoursPassed(animal.lastFed)) {
    className = 'yellow';
  }

  return (
    <div className={className}>
      <h3>{animal.name}</h3>

      <img
        className='animal-card-img'
        src={animal.imageUrl}
        alt={animal.name}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = '/src/assets/404.avif';
        }}
      />
      <div className='hunger-status'>
        <HungerStatus animal={animal} />
      </div>
    </div>
  );
};
