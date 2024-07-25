import { useNavigate } from 'react-router-dom';
import styles from './SearchButton.module.scss';

interface IProps {
  searchInputValue: string;
  paginationPageNum: number;
}

const SearchButton = ({ searchInputValue, paginationPageNum }: IProps) => {
  const navigate = useNavigate();

  function searchButtonUpdateURL(paginationPageNum: number) {
    if (searchInputValue !== '') {
      navigate(
        `people?page=${1 || paginationPageNum}&search=${searchInputValue}`,
      );
    } else {
      navigate(`people?page=${1}`);
    }
  }

  const setSearchInputValueToLocalStorage = () => {
    localStorage.setItem('searchInputValue', searchInputValue);
    searchButtonUpdateURL(paginationPageNum);
  };

  return (
    <button
      data-testid="searchButton"
      onClick={setSearchInputValueToLocalStorage}
      type="button"
      className={styles.searchButton}
    >
      Search
    </button>
  );
};

export { SearchButton };
