import { Component, ReactNode } from 'react';
import './Header.scss';
import { Search } from '../Search/Search';

class Header extends Component {
  render(): ReactNode {
    return (
      <div className="header-wrapper">
        <Search />
      </div>
    );
  }
}

export { Header };
