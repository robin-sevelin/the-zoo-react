// import { useEffect, useState } from 'react';

// const getValue = (key: string, intialValue: string) => {
//   const savedValue = JSON.parse(localStorage.getItem(key));
//   if (savedValue) {
//     return savedValue;
//   }

//   return intialValue;
// };

// export const useLocalStorage = (key: string, intialValue: string) => {
//   const [value, setValue] = useState(() => {
//     return getValue(key, intialValue);
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [value]);

//   return [value, setValue];
// };
