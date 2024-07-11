import './App.css';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </>
  );
};

export default App;
