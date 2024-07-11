import { IPeopleCard } from 'src/interfaces';
import styles from './Card.module.scss';

interface ICardData {
  cardData: IPeopleCard;
}

const Card = ({ cardData }: ICardData) => {
  const { name, birth_year, mass, height } = cardData;

  return (
    <div className={styles.cardWrapper}>
      <p className={styles.cardName}>Character: {name}</p>
      <p className={styles.cardDescription}>Was born: {birth_year}</p>
      <p className={styles.cardDescription}>Has mass: {mass}</p>
      <p className={styles.cardDescription}>Has height: {height}</p>
    </div>
  );
};

export { Card };
