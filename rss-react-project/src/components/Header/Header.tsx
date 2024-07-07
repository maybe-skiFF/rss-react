import { Component, ReactNode } from 'react';
import { Search } from '../Search/Search';
import styles from './Header.module.scss';
import { ErrorButton } from '../ErrorButton/ErrorButton';

interface IProps {
  searchInputValue: string;
  setInputValue: (inputValue: string) => void;
  searchButtonHandler: (searchInputValue: string) => void;
}
class Header extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render(): ReactNode {
    return (
      <div className={styles.headerWrapper}>
        <Search
          searchInputValue={this.props.searchInputValue}
          setInputValue={this.props.setInputValue}
          searchButtonHandler={this.props.searchButtonHandler}
        />
        <ErrorButton />
      </div>
    );
  }
}

export { Header };
