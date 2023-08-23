import { Link, useParams } from 'react-router-dom';
import { IAnimal } from '../models/IAnimal';
import { useLocalStorage } from '../hooks/useStorage';
import { DateTime } from 'luxon';
import { useState } from 'react';
import { fourHoursPassed, threeHoursPassed } from '../services/TimeService';
import { resetFeed, feedAnimal } from '../services/AnimalService';
import { HungerStatus } from './HungerStatus';
import { useAnimalFeedStatus } from '../hooks/useAnimalFeedStatus';

export const AboutAnimal = () => {
  const [animals, setAnimals] = useLocalStorage<IAnimal[]>('animals', []);
  const [threeHours, setThreeHours] = useState(false);
  const params = useParams();

  const foundAnimal = animals.find(
    (animal) => animal.id === Number(params.id)
  ) as IAnimal;

  const checkFedAnimals = () => {
    const isThreeHoursPassed = threeHoursPassed(foundAnimal.lastFed);
    setThreeHours(isThreeHoursPassed);

    if (isThreeHoursPassed) {
      const isFourHoursPassed = fourHoursPassed(foundAnimal.lastFed);
      if (isFourHoursPassed) {
        reset(foundAnimal);
        setThreeHours(false);
      }
    }
  };

  const reset = (foundAnimal: IAnimal) => {
    const updatedList = resetFeed(foundAnimal, animals);
    setAnimals(updatedList);
  };

  const feed = (animalIndex: number) => {
    const updatedList = feedAnimal(animalIndex, animals);

    setAnimals(updatedList);
  };

  useAnimalFeedStatus(checkFedAnimals, foundAnimal);

  return (
    <div className='animal-info'>
      <h2>{foundAnimal.name}</h2>
      <p>{foundAnimal.latinName}</p>
      <img
        loading='lazy'
        className='about-animal-img'
        src={foundAnimal.imageUrl}
        alt={foundAnimal.name}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = '/src/assets/404.png';
          currentTarget.loading = 'lazy';
        }}
      />
      <h3>Om {foundAnimal.name}</h3>
      <p>{foundAnimal.shortDescription}</p>
      <h3>Fakta</h3>
      <p>{foundAnimal.longDescription}</p>
      <p>
        senast matad: {DateTime.fromISO(foundAnimal.lastFed).toFormat('HH:mm')}
      </p>
      <HungerStatus animal={foundAnimal} />
      <button
        disabled={!threeHours && foundAnimal.isFed}
        onClick={() => feed(foundAnimal.id - 1)}
      >
        Mata
      </button>
      <Link to='/animals'>
        <button>Tillbaka</button>
      </Link>
    </div>
  );
};
