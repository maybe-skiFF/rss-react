import { Card } from '../Card/Card';
import { IPeopleCard, IPeopleCards } from 'src/interfaces';
import styles from './CardList.module.scss';
import { useNavigate } from 'react-router-dom';

interface IProps {
  cardsData: IPeopleCards;
  isOpenDetailCard: boolean;
  setIsOpenDetailCard: (isOpen: boolean) => void;
}

const CardList = ({
  cardsData,
  isOpenDetailCard,
  setIsOpenDetailCard,
}: IProps) => {
  const navigate = useNavigate();

  function closeDetailedCard() {
    if (isOpenDetailCard) {
      setIsOpenDetailCard(false);
      navigate('people/');
    } else return;
  }

  function renderCards() {
    if (cardsData.results && cardsData.count !== 0) {
      return (
        <div
          data-testid="cardList"
          className={styles.cardListWrapper}
          onClick={() => closeDetailedCard()}
        >
          {cardsData.results.map((cardItem: IPeopleCard) => (
            <Card
              cardData={cardItem}
              key={cardItem.name}
              setIsOpenDetailCard={setIsOpenDetailCard}
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
