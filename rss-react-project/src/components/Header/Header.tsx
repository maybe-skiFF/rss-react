import { Component, ReactNode } from 'react';
import './Header.scss';
import { SearchInput } from '../SearchInput/SearchInput';
import { CustomButton } from '../CustomButton/CustomButton';

class Header extends Component {
  render(): ReactNode {
    return (
      <div className="header-wrapper">
        <SearchInput />
        <CustomButton />
      </div>
    );
  }
}

export { Header };
