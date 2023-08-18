import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Home } from '../components/Home';
import { Main } from '../components/Main';
import { AboutAnimal } from '../components/AboutAnimal';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: '/',
        Component: Home,
      },
      {
        path: '/animals',
        Component: Main,
      },
      {
        path: '/animals/:id',
        Component: AboutAnimal,
      },
    ],
  },
]);
