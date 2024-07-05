import { Component, ReactNode } from 'react';
import './MainPage.scss';
import { Header } from 'src/components/Header/Header';

class MainPage extends Component {
  render(): ReactNode {
    return <Header />;
  }
}

export { MainPage };
