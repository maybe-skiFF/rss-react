import styles from './SearchButton.module.scss';

interface IProps {
  searchInputValue: string;
  searchButtonHandler: (searchInputValue: string) => void;
}
const SearchButton = ({ searchInputValue, searchButtonHandler }: IProps) => {
  const setSearchInputValueToLocalStorage = () => {
    localStorage.setItem('searchInputValue', searchInputValue);
    searchButtonHandler(searchInputValue);
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
