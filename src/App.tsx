import { RouterProvider } from 'react-router-dom';
import { router } from './router/Router';
import { useReducer } from 'react';
import { AnimalsReducer } from './reducer/AnimalsReducer';
import { useLocalStorage } from './hooks/useStorage';
import { IAnimal } from './models/IAnimal';
import { useAnimalData } from './hooks/useAnimalData';
import { getAnimals } from './services/DataService';
import { AnimalsContext } from './context/AnimalsContext';

export const App = () => {
  const [storedAnimals, setStoredAnimals] = useLocalStorage<IAnimal[]>(
    'animals',
    []
  );

  const [animals, dispatch] = useReducer(AnimalsReducer, storedAnimals);

  const getData = async () => {
    setStoredAnimals(await getAnimals());
  };

  useAnimalData(animals, getData);

  return (
    <>
      <AnimalsContext.Provider value={{ animals, dispatch }}>
        <RouterProvider router={router} />
      </AnimalsContext.Provider>
    </>
  );
};
