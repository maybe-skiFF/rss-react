import { AppProps } from 'next/app';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import './_app.scss';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { ThemeContext, ThemeContextProvider } from '../context/ThemeContext';
import { useContext } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeContextProvider>
      <div className={`bodyClassName ${theme === 'dark' ? 'appBody' : ''}`}>
        <ErrorBoundary>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ErrorBoundary>
      </div>
    </ThemeContextProvider>
  );
};

export default App;
