import { useParams } from 'react-router-dom';
import { IAnimal } from '../models/IAnimal';
import { useLocalStorage } from '../hooks/useStorage';
import { DateTime } from 'luxon';
import { useEffect } from 'react';
import { threeHoursPassed } from '../services/TimeService';
import { feedAnimal } from '../services/FeedService';
import { resetFeed } from '../services/ResetFeedService';

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
        reset(foundAnimal);
      }
    }
  });

  const reset = (foundAnimal: IAnimal) => {
    const updatedList = resetFeed(foundAnimal, animals);
    setAnimals(updatedList);
  };

  const feed = (animalIndex: number) => {
    const updatedList = feedAnimal(animalIndex, animals);

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
        onClick={() => feed(foundAnimal.id - 1)}
      >
        Mata
      </button>
    </div>
  );
};
