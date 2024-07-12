import { getSearchCards } from 'src/services/api';
import { Card } from '../Card/Card';
import { IPeopleCard, IPeopleCards } from 'src/interfaces';
import styles from './CardList.module.scss';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

interface IProps {
  cardsData: IPeopleCards;
  setCardsData: (cards: IPeopleCards) => void;
}

const CardList = ({ cardsData, setCardsData }: IProps) => {
  const [searchParams] = useSearchParams();
  const curPage = searchParams.get('page') ?? '1';
  const curSearchTerm = searchParams.get('search') ?? '';

  useEffect(() => {
    function getCardsFromApi() {
      getSearchCards(curSearchTerm, Number(curPage))
        .then(data => setCardsData(data))
        .catch(e => console.error(e));
    }

    if (!localStorage.getItem('searchInputValue')) {
      getCardsFromApi();
    }
    if (localStorage.getItem('searchInputValue') === '') {
      getCardsFromApi();
    }
    if (localStorage.getItem('searchInputValue') !== '') {
      getCardsFromApi();
    }
  }, [setCardsData, curPage, curSearchTerm]);

  function renderCards() {
    if (cardsData.results && cardsData.count !== 0) {
      return (
        <div className={styles.cardListWrapper}>
          {cardsData.results.map((cardItem: IPeopleCard) => (
            <Card cardData={cardItem} key={cardItem.name} />
          ))}
        </div>
      );
    } else if (cardsData.count === 0) {
      return (
        <div className={styles.cardListWrapper}>
          <h1>No results were found for your request</h1>
        </div>
      );
    }
  }

  return renderCards();
};

export { CardList };
