import { Component, ReactNode } from 'react';
import './CustomButton.scss';

class CustomButton extends Component {
  render(): ReactNode {
    return (
      <button type="button" className="search-button">
        Search
      </button>
    );
  }
}

export { CustomButton };
