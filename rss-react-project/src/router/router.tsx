import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '../pages/MainPage/MainPage';
import { HookFormPage } from '../pages/HookFormPage/HookFormPage';
import { UncontrolledFormPage } from '../pages/UncontrolledFormPage/UncontrolledFormPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/hookFormPage',
    element: <HookFormPage />,
  },
  {
    path: '/uncontrolledFormPage',
    element: <UncontrolledFormPage />,
  },
]);

export { router };
