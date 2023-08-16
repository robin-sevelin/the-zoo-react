import { Outlet } from 'react-router-dom';
import { AppHeader } from './AppHeader';

export const AppLayout = () => {
  return (
    <>
      <header>
        <AppHeader />
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};
