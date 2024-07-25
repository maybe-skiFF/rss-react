import { ChangeEvent } from 'react';
import { SearchButton } from '../SearchButton/SearchButton';
import styles from './Search.module.scss';

interface IProps {
  searchInputValue: string;
  setInputValue: (inputValue: string) => void;
  paginationPageNum: number;
}

const Search = ({
  searchInputValue,
  setInputValue,
  paginationPageNum,
}: IProps) => {
  const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value.trim());
  };

  return (
    <div className={styles.searchWrapper}>
      <input
        value={searchInputValue}
        type="search"
        placeholder="search..."
        className={styles.searchInput}
        onChange={e => {
          handleChangeInputValue(e);
        }}
      />
      <SearchButton
        searchInputValue={searchInputValue}
        paginationPageNum={paginationPageNum}
      />
    </div>
  );
};

export { Search };
