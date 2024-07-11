import { ChangeEvent } from 'react';
import { SearchButton } from '../SearchButton/SearchButton';
import styles from './Search.module.scss';

interface IProps {
  searchInputValue: string;
  setInputValue: (inputValue: string) => void;
  searchButtonHandler: (searchInputValue: string) => void;
  paginationPageNum: number;
}

const Search = ({
  searchInputValue,
  setInputValue,
  searchButtonHandler,
  paginationPageNum,
}: IProps) => {
  const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.trim());
  };

  return (
    <div className={styles.searchWrapper}>
      <input
        value={searchInputValue}
        type="search"
        placeholder="search..."
        className={styles.searchInput}
        onChange={handleChangeInputValue}
      />
      <SearchButton
        searchInputValue={searchInputValue}
        searchButtonHandler={searchButtonHandler}
        paginationPageNum={paginationPageNum}
      />
    </div>
  );
};

export { Search };
