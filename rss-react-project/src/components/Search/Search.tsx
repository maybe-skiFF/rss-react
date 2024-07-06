import { ChangeEvent, Component, ReactNode } from 'react';
import './Search.scss';
import { CustomButton } from '../CustomButton/CustomButton';

interface IProps {
  searchInputValue: string;
  setInputValue: (inputValue: string) => void;
  searchButtonHandler: (searchInputValue: string) => void;
}

class Search extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    this.props.setInputValue(e.target.value.trim());
  };

  render(): ReactNode {
    return (
      <div className="search-wrapper">
        <input
          value={this.props.searchInputValue}
          type="search"
          placeholder="search..."
          className="search-input"
          onChange={this.handleChangeInputValue}
        />
        <CustomButton
          searchInputValue={this.props.searchInputValue}
          searchButtonHandler={this.props.searchButtonHandler}
        />
      </div>
    );
  }
}

export { Search };
