import { Component, ReactNode } from 'react';
import './App.css';
import { MainPage } from './pages/MainPage/MainPage';

class App extends Component {
  render(): ReactNode {
    return (
      <>
        <h1>Test</h1>
        <MainPage />
      </>
    );
  }
}

export default App;
