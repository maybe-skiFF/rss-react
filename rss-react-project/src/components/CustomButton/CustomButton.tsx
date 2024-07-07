import { Component, ReactNode } from 'react';
import styles from './CustomButton.module.scss';

interface IProps {
  searchInputValue: string;
  searchButtonHandler: (searchInputValue: string) => void;
}
class CustomButton extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  setSearchInputValueToLocalStorage = () => {
    localStorage.setItem('searchInputValue', this.props.searchInputValue);
    this.props.searchButtonHandler(this.props.searchInputValue);
  };

  render(): ReactNode {
    return (
      <button
        onClick={this.setSearchInputValueToLocalStorage}
        type="button"
        className={styles.searchButton}
      >
        Search
      </button>
    );
  }
}

export { CustomButton };
