import { ChangeEvent, useContext, useState } from 'react';
import { SearchButton } from '../SearchButton/SearchButton';
import styles from './Search.module.scss';
import { ThemeContext } from '../../context/ThemeContext';

interface IProps {
  paginationPageNum: number;
}

const Search = ({ paginationPageNum }: IProps) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const { theme } = useContext(ThemeContext);

  const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value.trim());
  };

  return (
    <div className={styles.searchWrapper}>
      <input
        value={searchValue}
        type="search"
        placeholder="search..."
        className={`${styles.searchInput} ${theme === 'dark' ? styles.dark : ''}`}
        onChange={e => {
          handleChangeInputValue(e);
        }}
      />
      <SearchButton
        searchValue={searchValue}
        paginationPageNum={paginationPageNum}
      />
    </div>
  );
};

export { Search };
