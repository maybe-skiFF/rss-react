import { Component, ReactNode } from 'react';
import './CustomButton.scss';

interface IProps {
  searchInputValue: string;
}
class CustomButton extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  searchButtonHandler = () =>
    localStorage.setItem('searchInputValue', this.props.searchInputValue);

  render(): ReactNode {
    return (
      <button
        onClick={this.searchButtonHandler}
        type="button"
        className="search-button"
      >
        Search
      </button>
    );
  }
}

export { CustomButton };
