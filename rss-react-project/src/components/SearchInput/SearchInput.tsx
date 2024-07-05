import { Component, ReactNode } from 'react';
import './SearchInput.scss';

class SearchInput extends Component {
  render(): ReactNode {
    return (
      <input type="search" placeholder="search..." className="search-input" />
    );
  }
}

export { SearchInput };
