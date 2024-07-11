import { Header } from 'src/components/Header/Header';
import { CardList } from 'src/components/CardList/CardList';
import { getSearchCards } from 'src/services/api';
import { IPeopleCard } from 'src/interfaces';
import { Loader } from 'src/components/Loader/Loader';
import { useState } from 'react';

const MainPage = () => {
  const [searchInputValue, setSearchInputValue] = useState<string>(
    localStorage.getItem('searchInputValue') ?? '',
  );
  const [cardsDataState, setCardsData] = useState<[] | IPeopleCard[]>([]);
  const [isLoading, setIsLoading] = useState<string>('false');

  function searchInputHandler(value: string) {
    setSearchInputValue(value);
  }

  // function setCardsData(cards: [] | IPeopleCard[]) {
  //   setCardsDataState(cards);
  // }

  function searchButtonHandler(searchInputValue: string) {
    setIsLoading('true');

    getSearchCards(searchInputValue)
      .then(data => setCardsData(data.results))
      .then(() => setIsLoading('false'))
      .catch(e => console.error(e));
  }

  return (
    <>
      <Header
        searchInputValue={searchInputValue}
        setInputValue={searchInputHandler}
        searchButtonHandler={searchButtonHandler}
      />
      {isLoading === 'true' ? <Loader /> : ''}
      <CardList setCardsData={setCardsData} cardsData={cardsDataState} />
    </>
  );
};

export { MainPage };
