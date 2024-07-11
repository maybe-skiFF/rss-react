import { useNavigate } from 'react-router-dom';
import styles from './SearchButton.module.scss';

interface IProps {
  searchInputValue: string;
  searchButtonHandler: (searchInputValue: string) => void;
  paginationPageNum: number;
}

const SearchButton = ({
  searchInputValue,
  searchButtonHandler,
  paginationPageNum,
}: IProps) => {
  const navigate = useNavigate();

  function updateURL(paginationPageNum: number) {
    if (searchInputValue !== '') {
      navigate(`/page=${1 || paginationPageNum}?search=${searchInputValue}`);
    } else {
      navigate(`/page=${1}`);
    }
  }

  const setSearchInputValueToLocalStorage = () => {
    localStorage.setItem('searchInputValue', searchInputValue);
    searchButtonHandler(searchInputValue);
    updateURL(paginationPageNum);
  };

  return (
    <button
      onClick={setSearchInputValueToLocalStorage}
      type="button"
      className={styles.searchButton}
    >
      Search
    </button>
  );
};

export { SearchButton };
