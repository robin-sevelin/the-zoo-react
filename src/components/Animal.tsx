import { IAnimal } from '../models/IAnimal';

interface IAnimalProps {
  animal: IAnimal;
  onClickAnimal: (animal: IAnimal) => void;
}

export const AppAnimal = ({ animal, onClickAnimal }: IAnimalProps) => {
  const handleClick = (animal: IAnimal) => {
    onClickAnimal(animal);
  };

  return (
    <>
      <div
        className={animal.isFed ? 'green' : 'red'}
        onClick={() => handleClick(animal)}
      >
        <h3>{animal.name}</h3>

        <img
          width='100'
          height='100'
          src={animal.imageUrl}
          alt={animal.name}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = '/src/assets/placeholder.jpg';
          }}
        />
        <p>{animal.shortDescription}</p>
      </div>
    </>
  );
};
