import { createBrowserRouter } from 'react-router-dom';
import { DetaildCard } from 'src/components/DetaildCard/DetaildCard';
import { MainPage } from 'src/pages/MainPage/MainPage';
import { Page404 } from 'src/pages/Page404/Page404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      {
        path: 'people/:additionalParam?',
        element: <MainPage />,
        children: [
          {
            path: 'people/detailed:id',
            element: <DetaildCard />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <Page404 />,
  },
]);

export { router };
