import { IAnimal } from '../models/IAnimal';

interface IAnimalProps {
  animal: IAnimal;
}

export const AppAnimal = ({ animal }: IAnimalProps) => {
  return (
    <>
      <div className={animal.isFed ? 'green' : 'red'}>
        <h3>{animal.name}</h3>
        <img
          loading='lazy'
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
