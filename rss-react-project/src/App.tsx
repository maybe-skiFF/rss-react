import { Component, ReactNode } from 'react';
import './App.css';
import { MainPage } from './pages/MainPage/MainPage';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';

class App extends Component {
  render(): ReactNode {
    return (
      <>
        <ErrorBoundary>
          <h1>Test</h1>
          <MainPage />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
