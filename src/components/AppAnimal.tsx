import { IAnimal } from '../models/IAnimal';

interface IAnimalProps {
  animal: IAnimal;
  onFeed: (id: number) => void;
  onClickAnimal: (id: number) => void;
}

export const AppAnimal = ({ animal, onClickAnimal }: IAnimalProps) => {
  // const handleClick = (id: number) => {
  //   onFeed(id);
  // };

  const handleClick = (id: number) => {
    onClickAnimal(id);
  };

  return (
    <>
      <div
        className={animal.isFed ? 'green' : 'red'}
        onClick={() => handleClick(animal.id)}
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
