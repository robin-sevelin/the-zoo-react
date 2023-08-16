import { Link } from 'react-router-dom';

export const AppNav = () => {
  return (
    <>
      <Link to={'/about'}>About</Link>
      <Link to={'/'}>The animals</Link>
    </>
  );
};
