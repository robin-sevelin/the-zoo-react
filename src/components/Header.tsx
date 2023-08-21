import { Navigation } from './Navigation';

export const Header = () => {
  return (
    <>
      <div className='logo'>
        <h1>The Zoo</h1>
        <img
          width={100}
          height={100}
          src='/src/assets/vecteezy_the-paw-print_8473749_828.png'
          alt='paws-img'
        />
      </div>
      <Navigation />
    </>
  );
};
