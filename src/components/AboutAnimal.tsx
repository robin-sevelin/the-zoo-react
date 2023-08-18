import { Link, useParams } from 'react-router-dom';
import { IAnimal } from '../models/IAnimal';
import { useLocalStorage } from '../hooks/useStorage';
import { HungerStatus } from './HungerStatus';

export const AboutAnimal = () => {
  const [animals, setAnimals] = useLocalStorage<IAnimal[]>('animals', []);
  const params = useParams();
  const foundAnimal = animals.find(
    (animal) => animal.id === Number(params.id)
  ) as IAnimal;

  const feedAnimal = (animalIndex: number) => {
    const updatedList = animals.map((animal, index) => {
      if (index === animalIndex) {
        return {
          ...animal,
          isFed: true,
          lastFed: new Date().toLocaleTimeString(),
        };
      }
      return animal;
    });
    setAnimals(updatedList);
  };

  return (
    <div className='animal-info'>
      <h2>{foundAnimal.name}</h2>
      <p>{foundAnimal.longDescription}</p>
      <img
        loading='lazy'
        width={200}
        height={250}
        src={foundAnimal.imageUrl}
        alt={foundAnimal.name}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = '/src/assets/placeholder.jpg';
        }}
      />
      <button
        disabled={foundAnimal.isFed}
        onClick={() => feedAnimal(foundAnimal.id - 1)}
      >
        Mata
      </button>
      <Link to='/animals'>
        <button>Take me back</button>
      </Link>
      <HungerStatus animal={foundAnimal} />
    </div>
  );
};
