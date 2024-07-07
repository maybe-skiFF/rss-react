import { Component, ReactNode } from 'react';
import { IPeopleCard } from 'src/interfaces';
import styles from './Card.module.scss';

interface ICardData {
  cardData: IPeopleCard;
}

class Card extends Component<ICardData> {
  constructor(props: ICardData) {
    super(props);
  }
  render(): ReactNode {
    return (
      <div className={styles.cardWrapper}>
        <p className={styles.cardName}>Character: {this.props.cardData.name}</p>
        <p className={styles.cardDescription}>
          Was born: {this.props.cardData.birth_year}
        </p>
        <p className={styles.cardDescription}>
          Has mass: {this.props.cardData.mass}
        </p>
        <p className={styles.cardDescription}>
          Has height: {this.props.cardData.height}
        </p>
      </div>
    );
  }
}

export { Card };
