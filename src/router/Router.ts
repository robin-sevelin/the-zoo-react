import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '../components/AppLayout';
import { AppHome } from '../components/AppHome';
import { AppMain } from '../components/AppMain';
import { AnimalInfo } from '../components/AnimalInfo';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    children: [
      {
        path: '/',
        Component: AppHome,
      },
      {
        path: '/animals',
        Component: AppMain,
      },
      {
        path: '/animals/:id',
        Component: AnimalInfo,
      },
    ],
  },
]);
