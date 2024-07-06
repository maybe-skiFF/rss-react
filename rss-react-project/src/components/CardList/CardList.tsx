import { Component, ReactNode } from 'react';
import './CardList.scss';
import { getCards } from 'src/services/api';
import { Card } from '../Card/Card';
import { IPeopleCard } from 'src/interfaces';

interface IProps {
  cardsData: [] | IPeopleCard[];
  setCardsData: (cards: [] | IPeopleCard[]) => void;
}

class CardList extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  componentDidMount(): void {
    getCards()
      .then(data => this.props.setCardsData(data.results))
      .catch(e => console.log(e));
  }

  renderCards() {
    if (this.props.cardsData) {
      return (
        <div className="card-list-wrapper">
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
