import { useEffect, useState } from 'react';
import { IAnimal } from '../models/IAnimal';

const getValue = (key: string, initialValue: IAnimal[]) => {
  const savedValue = JSON.parse(localStorage.getItem(key) || 'null');
  if (savedValue !== null) {
    return savedValue;
  }
  return initialValue;
};

export const useLocalStorage = <T>(key: string, initialValue: IAnimal[]) => {
  const [value, setValue] = useState<T>(() => {
    return getValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setValue] as const;
};
