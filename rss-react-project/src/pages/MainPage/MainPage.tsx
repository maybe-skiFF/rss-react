import { useContext, useState } from 'react';
import styles from './MainPage.module.scss';
import { Header } from '../../components/Header/Header';
import { CardList } from '../../components/CardList/CardList';
import { Loader } from '../../components/Loader/Loader';
import { ErrorBoundary } from '../../components/ErrorBoundary/ErrorBoundary';
import { Pagination } from '../../components/Pagination/Pagination';
import { DetaildCard } from '../../components/DetaildCard/DetaildCard';
import { useGetSearchCardsQuery } from '../../services/api';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { ThemeContext } from '../../context/ThemeContext';
import { Flyout } from '../../components/Flyout/Flyout';

const MainPage = () => {
  const [isOpenDetailCard, setIsOpenDetailCard] = useState<boolean>(false);
  const { theme } = useContext(ThemeContext);

  const paginationPageNum = useSelector(
    (state: RootState) => state.paginationPage.pageNum,
  );

  const favoritePeopleData = useSelector(
    (state: RootState) => state.favoritePeople.favoritePeople,
  );

  const searchInputValue = useSelector(
    (state: RootState) => state.searchInputValue.searchValue,
  );

  const { data: cardsData, isFetching } = useGetSearchCardsQuery({
    searchInputValue,
    paginationPageNum,
  });

  return (
    <ErrorBoundary>
      <Header paginationPageNum={paginationPageNum} />
      {isFetching ? <Loader /> : ''}
      <div
        className={`${styles.outletWrapper} ${theme === 'dark' ? styles.dark : ''}`}
      >
        {cardsData && (
          <CardList
            cardsData={cardsData}
            isOpenDetailCard={isOpenDetailCard}
            setIsOpenDetailCard={setIsOpenDetailCard}
          />
        )}
        {isOpenDetailCard && cardsData ? (
          <DetaildCard
            cardsData={cardsData}
            setIsOpenDetailCard={setIsOpenDetailCard}
          />
        ) : (
          ''
        )}
      </div>
      {cardsData && (
        <Pagination cardsData={cardsData} searchInputValue={searchInputValue} />
      )}
      {favoritePeopleData.length !== 0 ? <Flyout /> : ''}
    </ErrorBoundary>
  );
};

export { MainPage };
