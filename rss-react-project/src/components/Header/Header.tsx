import { Search } from '../Search/Search';
import styles from './Header.module.scss';
import { ErrorButton } from '../ErrorButton/ErrorButton';

interface IProps {
  searchInputValue: string;
  setInputValue: (inputValue: string) => void;
  searchButtonHandler: (searchInputValue: string) => void;
}
const Header = ({
  searchInputValue,
  setInputValue,
  searchButtonHandler,
}: IProps) => {
  return (
    <div className={styles.headerWrapper}>
      <Search
        searchInputValue={searchInputValue}
        setInputValue={setInputValue}
        searchButtonHandler={searchButtonHandler}
      />
      <ErrorButton />
    </div>
  );
};

export { Header };
