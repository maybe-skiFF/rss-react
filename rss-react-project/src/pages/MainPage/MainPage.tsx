import { IPeopleCards } from 'src/interfaces';
import { useState } from 'react';
import styles from './MainPage.module.scss';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { useSearchValue } from '../../hooks/useSearchValue';
import { CardList } from '../../components/CardList/CardList';
import { Loader } from '../../components/Loader/Loader';
import { ErrorBoundary } from '../../components/ErrorBoundary/ErrorBoundary';
import { Pagination } from '../../components/Pagination/Pagination';
import { DetaildCard } from '../../components/DetaildCard/DetaildCard';
import { getSearchCards } from '../../services/api';

const MainPage = () => {
  const [searchInputValue, setSearchInputValue] = useSearchValue();
  const [cardsData, setCardsData] = useState<IPeopleCards>(Object);
  const [isLoading, setIsLoading] = useState<string>('false');
  const [paginationPageNum, setPaginationPageNum] = useState<number>(1);
  const [personData, setPersonData] = useState<IPeopleCards>(Object);
  const [isOpenDetailCard, setIsOpenDetailCard] = useState<boolean>(false);

  const navigate = useNavigate();

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
    navigate(`people/detailed:${personName.trim()}`);

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
