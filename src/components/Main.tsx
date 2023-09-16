import { useContext } from 'react';
import { IAnimal } from '../models/IAnimal';
import { AnimalList } from './AnimalList';
import { AnimalsContext } from '../context/AnimalsContext';
import { useCheckFedAnimals } from '../hooks/useCheckAnimals';
import { ActionType } from '../reducer/AnimalsReducer';

export const Main = () => {
  const { animals, dispatch } = useContext(AnimalsContext);

  const reset = (foundAnimal: IAnimal) => {
    dispatch({
      type: ActionType.RESET_ANIMAL,
      payload: JSON.stringify(foundAnimal),
    });
  };

  useCheckFedAnimals(animals, reset);
  return (
    <>
      <AnimalList animals={animals} />
    </>
  );
};
