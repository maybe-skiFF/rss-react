import { Component, ReactNode } from 'react';
import './MainPage.scss';
import { Header } from 'src/components/Header/Header';
import { CardList } from 'src/components/CardList/CardList';

class MainPage extends Component {
  render(): ReactNode {
    return (
      <>
        <Header />
        <CardList />
      </>
    );
  }
}

export { MainPage };
