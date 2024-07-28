import './App.css';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { ThemeContextProvider } from './context/ThemeContext';

const App = () => {
  return (
    <>
      <ThemeContextProvider>
        <ErrorBoundary>
          <RouterProvider router={router} />
        </ErrorBoundary>
      </ThemeContextProvider>
    </>
  );
};

export default App;
