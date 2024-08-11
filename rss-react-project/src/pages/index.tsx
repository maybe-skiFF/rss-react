import { useContext, useState } from 'react';
import styles from './MainPage.module.scss';
import Header from '../components/Header/Header';
import CardList from '../components/CardList/CardList';
import Loader from '../components/Loader/Loader';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Pagination from '../components/Pagination/Pagination';
import DetaildCard from '../components/DetaildCard/DetaildCard';
import { api, useGetSearchCardsQuery } from '../services/api';
import { useSelector } from 'react-redux';
import { RootState, wrapper } from '../redux/store';
import { ThemeContext } from '../context/ThemeContext';
import Flyout from '../components/Flyout/Flyout';
import { IPeopleCards } from '../interfaces';
import { GetServerSideProps } from 'next';

interface IProps {
  cardsData: IPeopleCards | undefined;
  searchInputValue: string;
  paginationPageNum: number;
}

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

export default MainPage;

export const getServerSideProps: GetServerSideProps<IProps> =
  wrapper.getServerSideProps(store => async ctx => {
    const { query } = ctx;
    const searchInputValue = query.searchInputValue?.toString() ?? '';
    const paginationPageNum = Number(query.paginationPageNum) || 1;

    const { data: cardsData } = await store.dispatch(
      api.endpoints.getSearchCards.initiate({
        searchInputValue,
        paginationPageNum,
      }),
    );
    await Promise.all(store.dispatch(api.util.getRunningQueriesThunk()));

    return {
      props: {
        cardsData,
        searchInputValue,
        paginationPageNum,
      },
    };
  });
