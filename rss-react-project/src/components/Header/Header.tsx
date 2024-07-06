import { Component, ReactNode } from 'react';
import './Header.scss';
import { Search } from '../Search/Search';

interface IProps {
  searchInputValue: string;
  setInputValue: (inputValue: string) => void;
}
class Header extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render(): ReactNode {
    return (
      <div className="header-wrapper">
        <Search
          searchInputValue={this.props.searchInputValue}
          setInputValue={this.props.setInputValue}
        />
      </div>
    );
  }
}

export { Header };
