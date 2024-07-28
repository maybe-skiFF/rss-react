import { useNavigate } from 'react-router-dom';
import styles from './SearchButton.module.scss';
import { useDispatch } from 'react-redux';
import { searchInputValueChange } from '../../redux/searchInputValueSlice';
import { paginationPageChange } from '../../redux/paginationPageSlice';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface IProps {
  searchValue: string;
  paginationPageNum: number;
}

const SearchButton = ({ searchValue, paginationPageNum }: IProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);

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
      className={`${styles.searchButton} ${theme === 'dark' ? styles.dark : ''}`}
    >
      Search
    </button>
  );
};

export { SearchButton };
