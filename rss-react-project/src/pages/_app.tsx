import { AppProps } from 'next/app';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import './_app.scss';
import { Provider } from 'react-redux';
import { wrapper } from '../redux/store';
import { ThemeContext, ThemeContextProvider } from '../context/ThemeContext';
import { useContext } from 'react';

const App = ({ Component, ...params }: AppProps) => {
  const { theme } = useContext(ThemeContext);
  const { store } = wrapper.useWrappedStore(params);

  return (
    <ThemeContextProvider>
      <div className={`bodyClassName ${theme === 'dark' ? 'appBody' : ''}`}>
        <ErrorBoundary>
          <Provider store={store}>
            <Component {...params.pageProps} />
          </Provider>
        </ErrorBoundary>
      </div>
    </ThemeContextProvider>
  );
};

export default App;
