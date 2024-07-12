import { getSearchCards } from 'src/services/api';
import { Card } from '../Card/Card';
import { IPeopleCard, IPeopleCards } from 'src/interfaces';
import styles from './CardList.module.scss';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

interface IProps {
  cardsData: IPeopleCards;
  setCardsData: (cards: IPeopleCards) => void;
  getDetailedCardData: (personName: string) => void;
  isOpenDetailCard: boolean;
  setIsOpenDetailCard: (isOpen: boolean) => void;
}

const CardList = ({
  cardsData,
  setCardsData,
  getDetailedCardData,
  isOpenDetailCard,
  setIsOpenDetailCard,
}: IProps) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
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
    if (cardsData.detail) {
      navigate('*');
    }
  }, [setCardsData, curPage, curSearchTerm, cardsData.detail, navigate]);

  function closeDetailedCard() {
    if (isOpenDetailCard) setIsOpenDetailCard(false);
    else return;
  }

  function renderCards() {
    if (cardsData.results && cardsData.count !== 0) {
      return (
        <div
          className={styles.cardListWrapper}
          onClick={() => closeDetailedCard()}
        >
          {cardsData.results.map((cardItem: IPeopleCard) => (
            <Card
              cardData={cardItem}
              key={cardItem.name}
              getDetailedCardData={getDetailedCardData}
            />
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
