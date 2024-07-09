import { Component, ReactNode } from 'react';
import { getCards, getSearchCards } from 'src/services/api';
import { Card } from '../Card/Card';
import { IPeopleCard } from 'src/interfaces';
import styles from './CardList.module.scss';

interface IProps {
  cardsData: [] | IPeopleCard[];
  setCardsData: (cards: [] | IPeopleCard[]) => void;
}

class CardList extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  componentDidMount(): void {
    if (localStorage.getItem('searchInputValue') !== '') {
      getSearchCards(localStorage.getItem('searchInputValue'))
        .then(data => this.props.setCardsData(data.results))
        .catch(e => console.log(e));
    } else {
      getCards()
        .then(data => this.props.setCardsData(data.results))
        .catch(e => console.log(e));
    }
  }

  renderCards() {
    if (this.props.cardsData) {
      return (
        <div className={styles.cardListWrapper}>
          {this.props.cardsData.map((cardItem: IPeopleCard) => (
            <Card cardData={cardItem} key={cardItem.name} />
          ))}
        </div>
      );
    }
  }

  render(): ReactNode {
    return this.renderCards();
  }
}

export { CardList };
