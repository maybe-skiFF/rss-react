import styles from './SearchButton.module.scss';
import { useDispatch } from 'react-redux';
import { searchInputValueChange } from '../../redux/searchInputValueSlice';
import { paginationPageChange } from '../../redux/paginationPageSlice';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { useRouter } from 'next/router';

interface IProps {
  searchValue: string;
  paginationPageNum: number;
}

const SearchButton = ({ searchValue, paginationPageNum }: IProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);

  const query = { ...router.query };
  query.search = searchValue;
  query.page = String(paginationPageNum);

  function searchButtonUpdateURL() {
    if (searchValue !== '') {
      void router.push({ pathname: router.pathname, query });
    } else {
      void router.push({ pathname: router.pathname, query });
    }
  }

  const setSearchInputValueToLocalStorage = () => {
    localStorage.setItem('searchInputValue', searchValue);
    searchButtonUpdateURL();
    dispatch(searchInputValueChange(searchValue));
    dispatch(paginationPageChange(1));
  };

  return (
    <button
      data-testid="searchButton"
      onClick={setSearchInputValueToLocalStorage}
      type="button"
      className={`${styles.searchButton} ${theme === 'dark' ? styles.dark : ''}`}
    >
      Search
    </button>
  );
};

export default SearchButton;
