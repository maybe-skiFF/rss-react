import { getCards, getSearchCards } from 'src/services/api';
import { Card } from '../Card/Card';
import { IPeopleCard, IPeopleCards } from 'src/interfaces';
import styles from './CardList.module.scss';
import { useEffect } from 'react';

interface IProps {
  cardsData: IPeopleCards;
  setCardsData: (cards: IPeopleCards) => void;
}

const CardList = ({ cardsData, setCardsData }: IProps) => {
  useEffect(() => {
    if (!localStorage.getItem('searchInputValue')) {
      getCards()
        .then(data => setCardsData(data))
        .catch(e => console.error(e));
    }
    if (localStorage.getItem('searchInputValue') !== '') {
      getSearchCards(localStorage.getItem('searchInputValue'))
        .then(data => setCardsData(data))
        .catch(e => console.error(e));
    }
  }, [setCardsData]);

  function renderCards() {
    if (cardsData.results) {
      return (
        <div className={styles.cardListWrapper}>
          {cardsData.results.map((cardItem: IPeopleCard) => (
            <Card cardData={cardItem} key={cardItem.name} />
          ))}
        </div>
      );
    }
  }

  return renderCards();
};

export { CardList };
