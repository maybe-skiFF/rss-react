import { useNavigate } from 'react-router-dom';
import styles from './SearchButton.module.scss';
import { useDispatch } from 'react-redux';
import { searchInputValueChange } from '../../redux/searchInputValueSlice';
import { paginationPageChange } from '../../redux/paginationPageSlice';

interface IProps {
  searchValue: string;
  paginationPageNum: number;
}

const SearchButton = ({ searchValue, paginationPageNum }: IProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function searchButtonUpdateURL(paginationPageNum: number) {
    if (searchValue !== '') {
      navigate(`people?page=${1 || paginationPageNum}&search=${searchValue}`);
    } else {
      navigate(`people?page=${1}`);
    }
  }

  const setSearchInputValueToLocalStorage = () => {
    localStorage.setItem('searchInputValue', searchValue);
    searchButtonUpdateURL(paginationPageNum);
    dispatch(searchInputValueChange(searchValue));
    dispatch(paginationPageChange(1));
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
