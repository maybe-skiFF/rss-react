import { ChangeEvent, Component, ReactNode } from 'react';
import './Search.scss';
import { CustomButton } from '../CustomButton/CustomButton';

class Search extends Component {
  state = {
    searchInputValue: localStorage.getItem('searchInputValue') ?? '',
  };

  handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchInputValue: e.target.value.trim() });
  };

  render(): ReactNode {
    return (
      <div className="search-wrapper">
        <input
          value={this.state.searchInputValue}
          type="search"
          placeholder="search..."
          className="search-input"
          onChange={this.handleChangeInputValue}
        />
        <CustomButton />
      </div>
    );
  }
}

export { Search };
