import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from 'src/pages/MainPage/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/:key',
    element: <MainPage />,
  },
]);

export { router };
