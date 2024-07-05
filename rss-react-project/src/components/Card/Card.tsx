import { Component, ReactNode } from 'react';
import { IPeopleCard } from 'src/interfaces';
import './Card.scss';

interface ICardData {
  cardData: IPeopleCard;
}

class Card extends Component<ICardData> {
  constructor(props: ICardData) {
    super(props);
  }
  render(): ReactNode {
    return (
      <div className="card-wrapper">
        <p className="card-name">Character: {this.props.cardData.name}</p>
        <p className="card-description">
          Was born: {this.props.cardData.birth_year}
        </p>
        <p className="card-description">Has mass: {this.props.cardData.mass}</p>
        <p className="card-description">
          Has height: {this.props.cardData.height}
        </p>
      </div>
    );
  }
}

export { Card };
