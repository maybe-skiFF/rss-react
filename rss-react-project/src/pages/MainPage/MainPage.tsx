import { Header } from 'src/components/Header/Header';
import { CardList } from 'src/components/CardList/CardList';
import { getSearchCards } from 'src/services/api';
import { IPeopleCards } from 'src/interfaces';
import { Loader } from 'src/components/Loader/Loader';
import { useState } from 'react';
import { Pagination } from 'src/components/Pagination/Pagination';
import { ErrorBoundary } from 'src/components/ErrorBoundary/ErrorBoundary';
import styles from './MainPage.module.scss';
import { DetaildCard } from 'src/components/DetaildCard/DetaildCard';

const MainPage = () => {
  const [searchInputValue, setSearchInputValue] = useState<string>(
    localStorage.getItem('searchInputValue') ?? '',
  );
  const [cardsData, setCardsData] = useState<IPeopleCards>(Object);
  const [isLoading, setIsLoading] = useState<string>('false');
  const [paginationPageNum, setPaginationPageNum] = useState<number>(1);
  const [personData, setPersonData] = useState<IPeopleCards>(Object);
  const [isOpenDetailCard, setIsOpenDetailCard] = useState<boolean>(false);

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

  function getDetailedCardData(personName: string) {
    setIsLoading('true');
    setIsOpenDetailCard(true);

    getSearchCards(personName)
      .then(data => setPersonData(data))
      .then(() => setIsLoading('false'))
      .catch(e => console.error(e));
  }

  return (
    <ErrorBoundary>
      <Header
        searchInputValue={searchInputValue}
        setInputValue={searchInputHandler}
        searchButtonHandler={searchButtonHandler}
        paginationPageNum={paginationPageNum}
      />
      {isLoading === 'true' ? <Loader /> : ''}
      <div className={styles.outletWrapper}>
        <CardList
          setCardsData={setCardsData}
          cardsData={cardsData}
          getDetailedCardData={getDetailedCardData}
          isOpenDetailCard={isOpenDetailCard}
          setIsOpenDetailCard={setIsOpenDetailCard}
        />
        {personData.count && isOpenDetailCard ? (
          <DetaildCard
            personData={personData}
            setIsOpenDetailCard={setIsOpenDetailCard}
          />
        ) : (
          ''
        )}
      </div>
      <Pagination
        cardsData={cardsData}
        paginationButtonHandler={paginationButtonHandler}
        searchInputValue={searchInputValue}
        setPaginationPageNum={setPaginationPageNum}
      />
    </ErrorBoundary>
  );
};

export { MainPage };
