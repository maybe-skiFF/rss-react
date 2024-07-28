import './App.css';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme === 'dark' ? 'appBody' : ''}`}>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </div>
  );
};

export default App;
