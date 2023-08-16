import { IAnimal } from '../models/IAnimal';

interface IAnimalProps {
  animal: IAnimal;
  onFeed: (id: number) => void;
}

export const AppAnimal = ({ animal, onFeed }: IAnimalProps) => {
  const handleClick = (id: number) => {
    onFeed(id);
  };
  return (
    <div className={animal.isFed ? 'green' : 'red'}>
      <h3>{animal.name}</h3>
      <img width='100' height='100' src={animal.imageUrl} alt={animal.name} />
      <button onClick={() => handleClick(animal.id)}>feed</button>
    </div>
  );
};
