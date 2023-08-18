import { Link } from 'react-router-dom';

export const AboutAnimal = () => {
  const animals = localStorage.getItem('animals');

  return (
    <>
      <h3>Hello from animal info </h3>
      {animals}

      <Link to='/animals'>
        <button>Take me back</button>
      </Link>
    </>
  );
};
