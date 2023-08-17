import { useEffect, useState } from 'react';
import { IAnimal } from '../models/IAnimal';
import { Link } from 'react-router-dom';

export const AnimalInfo = () => {
  const [animal, setAnimal] = useState<IAnimal>();

  useEffect(() => {
    const clickedAnimal = localStorage.getItem('clickedAnimal');
    if (clickedAnimal) {
      setAnimal(JSON.parse(clickedAnimal));
    }
  }, []);

  const handleClick = () => {
    console.log(animal?.name);
  };

  return (
    <div className='animal-info'>
      <h3>{animal?.name}</h3>
      <img src={animal?.imageUrl} alt={animal?.name} width='200' height='200' />
      <p>{animal?.longDescription}</p>
      <button onClick={handleClick}>Mata djuret</button>
      <Link to='/animals'>Tillbaka</Link>
    </div>
  );
};
