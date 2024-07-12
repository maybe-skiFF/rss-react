import { IPeopleCard } from 'src/interfaces';
import styles from './Card.module.scss';

interface ICardData {
  cardData: IPeopleCard;
  getDetailedCardData: (personName: string) => void;
}

const Card = ({ cardData, getDetailedCardData }: ICardData) => {
  const { name, birth_year, mass, height } = cardData;

  return (
    <div
      onClick={e => {
        const target = e.target as HTMLDivElement;
        getDetailedCardData(target.id);
      }}
      id={name}
      className={styles.cardWrapper}
    >
      <p id={name} className={styles.cardName}>
        Character: {name}
      </p>
      <p id={name} className={styles.cardDescription}>
        Was born: {birth_year}
      </p>
      <p id={name} className={styles.cardDescription}>
        Has mass: {mass}
      </p>
      <p id={name} className={styles.cardDescription}>
        Has height: {height}
      </p>
    </div>
  );
};

export { Card };
