import { useParams } from 'react-router-dom';
import { IAnimal } from '../models/IAnimal';
import { useLocalStorage } from '../hooks/useStorage';
import { DateTime } from 'luxon';
import { useEffect } from 'react';
import { threeHoursPassed } from '../services/TimeService';

export const AboutAnimal = () => {
  const [animals, setAnimals] = useLocalStorage<IAnimal[]>('animals', []);
  const params = useParams();

  const foundAnimal = animals.find(
    (animal) => animal.id === Number(params.id)
  ) as IAnimal;

  useEffect(() => {
    if (foundAnimal.isFed) {
      const isThreeHoursPassed = threeHoursPassed(foundAnimal.lastFed);

      if (isThreeHoursPassed) {
        resetFeed(foundAnimal);
      }
    }
  });

  const resetFeed = (foundAnimal: IAnimal) => {
    const updatedList = animals.map((animal) => {
      if (animal.id === foundAnimal.id) {
        return {
          ...animal,
          isFed: false,
        };
      }
      return animal;
    });
    setAnimals(updatedList);
  };

  const feedAnimal = (animalIndex: number) => {
    const updatedList = animals.map((animal, index) => {
      if (index === animalIndex) {
        return {
          ...animal,
          isFed: true,
          lastFed: DateTime.now().toString(),
        };
      }
      return animal;
    });
    setAnimals(updatedList);
  };

  return (
    <div className='animal-info'>
      <h2>{foundAnimal.name}</h2>
      <p>{foundAnimal.latinName}</p>
      <img
        className='about-animal-img'
        src={foundAnimal.imageUrl}
        alt={foundAnimal.name}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = '/src/assets/404.png';
        }}
      />
      <h3>Om {foundAnimal.name}</h3>
      <p>{foundAnimal.shortDescription}</p>
      <h3>Fakta</h3>
      <p>{foundAnimal.longDescription}</p>
      <p>
        senast matad: {DateTime.fromISO(foundAnimal.lastFed).toFormat('HH:mm')}
      </p>
      <button
        disabled={foundAnimal.isFed}
        onClick={() => feedAnimal(foundAnimal.id - 1)}
      >
        Mata
      </button>
    </div>
  );
};
