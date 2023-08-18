import { Link, useParams } from 'react-router-dom';
import { IAnimal } from '../models/IAnimal';
import { useLocalStorage } from '../hooks/localStorage';

export const AboutAnimal = () => {
  const params = useParams();

  const [animals, setAnimals] = useLocalStorage<IAnimal[]>('animals', []);
  const foundAnimal = animals.find((animal) => animal.id === Number(params.id));
  const animalIndex = animals.findIndex(
    (animal) => animal.id === Number(params.id)
  );

  const feedAnimal = (animalIndex: number) => {
    const updatedList = animals.map((animal, index) => {
      if (index === animalIndex) {
        return { ...animal, isFed: true };
      }
      return animal;
    });
    setAnimals(updatedList);
  };

  return (
    <>
      <h3>{foundAnimal?.name}</h3>
      <img
        width={200}
        height={250}
        src={foundAnimal?.imageUrl}
        alt={foundAnimal?.name}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = '/src/assets/placeholder.jpg';
        }}
      />
      <p>{foundAnimal?.shortDescription}</p>
      <button onClick={() => feedAnimal(animalIndex)}>Mata</button>
      <Link to='/animals'>
        <button>Take me back</button>
      </Link>
    </>
  );
};
