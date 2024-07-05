import { Component, ReactNode } from 'react';
import './CardList.scss';
import { getCards } from 'src/services/api';
import { Card } from '../Card/Card';
import { IPeopleCard } from 'src/interfaces';

class CardList extends Component {
  state = {
    cardsData: [],
  };
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount(): void {
    getCards()
      .then(data => this.setState({ cardsData: data.results }))
      .catch(e => console.log(e));
  }

  renderCards() {
    if (this.state.cardsData) {
      return (
        <div className="card-list-wrapper">
          {this.state.cardsData.map((cardItem: IPeopleCard) => (
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
