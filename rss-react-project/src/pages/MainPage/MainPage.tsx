import { Component, ReactNode } from 'react';
import './MainPage.scss';
import { Header } from 'src/components/Header/Header';
import { CardList } from 'src/components/CardList/CardList';
import { getSearchCards } from 'src/services/api';
import { IPeopleCard } from 'src/interfaces';
import { Loader } from 'src/components/Loader/Loader';

class MainPage extends Component {
  state = {
    searchInputValue: localStorage.getItem('searchInputValue') ?? '',
    cardsData: [],
    isLoading: 'false',
  };

  searchInputHandler(value: string) {
    this.setState({ searchInputValue: value });
  }

  setCardsData(cards: [] | IPeopleCard[]) {
    this.setState({ cardsData: cards });
  }

  searchButtonHandler(searchInputValue: string) {
    this.setState({ isLoading: 'true' });
    getSearchCards(searchInputValue)
      .then(data => this.setState({ cardsData: data.results }))
      .then(() => this.setState({ isLoading: 'false' }))
      .catch(e => console.log(e));
  }

  render(): ReactNode {
    return (
      <>
        <Header
          searchInputValue={this.state.searchInputValue}
          setInputValue={this.searchInputHandler.bind(this)}
          searchButtonHandler={this.searchButtonHandler.bind(this)}
        />
        {this.state.isLoading === 'true' ? <Loader /> : ''}
        <CardList
          setCardsData={this.setCardsData.bind(this)}
          cardsData={this.state.cardsData}
        />
      </>
    );
  }
}

export { MainPage };
