import { useEffect, useState } from 'react';

const getValue = <T>(key: string, initialValue: T) => {
  const savedValue = JSON.parse(localStorage.getItem(key) || 'null') as T;
  if (savedValue !== null) {
    return savedValue;
  }

  return initialValue;
};

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(() => {
    return getValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as const;
};
