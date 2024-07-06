import { Component, ReactNode } from 'react';
import './MainPage.scss';
import { Header } from 'src/components/Header/Header';
import { CardList } from 'src/components/CardList/CardList';

class MainPage extends Component {
  state = {
    searchInputValue: localStorage.getItem('searchInputValue') ?? '',
  };

  searchInputHandler(value: string) {
    this.setState({ searchInputValue: value });
  }

  render(): ReactNode {
    return (
      <>
        <Header
          searchInputValue={this.state.searchInputValue}
          setInputValue={this.searchInputHandler.bind(this)}
        />
        <CardList />
      </>
    );
  }
}

export { MainPage };
