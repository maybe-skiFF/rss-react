import { Header } from 'src/components/Header/Header';
import { CardList } from 'src/components/CardList/CardList';
import { getSearchCards } from 'src/services/api';
import { IPeopleCards } from 'src/interfaces';
import { Loader } from 'src/components/Loader/Loader';
import { useState } from 'react';
import { Pagination } from 'src/components/Pagination/Pagination';

const MainPage = () => {
  const [searchInputValue, setSearchInputValue] = useState<string>(
    localStorage.getItem('searchInputValue') ?? '',
  );
  const [cardsData, setCardsData] = useState<IPeopleCards>(Object);

  const [isLoading, setIsLoading] = useState<string>('false');

  function searchInputHandler(value: string) {
    setSearchInputValue(value);
  }

  function searchButtonHandler(searchInputValue: string) {
    setIsLoading('true');

    getSearchCards(searchInputValue)
      .then(data => setCardsData(data))
      .then(() => setIsLoading('false'))
      .catch(e => console.error(e));
  }

  function paginationButtonHandler(numPage: number) {
    setIsLoading('true');

    getSearchCards(searchInputValue, numPage)
      .then(data => setCardsData(data))
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
      <CardList setCardsData={setCardsData} cardsData={cardsData} />
      <Pagination
        cardsData={cardsData}
        paginationButtonHandler={paginationButtonHandler}
        searchInputValue={searchInputValue}
      />
    </>
  );
};

export { MainPage };
