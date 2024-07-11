import { Search } from '../Search/Search';
import styles from './Header.module.scss';
import { ErrorButton } from '../ErrorButton/ErrorButton';

interface IProps {
  searchInputValue: string;
  setInputValue: (inputValue: string) => void;
  searchButtonHandler: (searchInputValue: string) => void;
  paginationPageNum: number;
}
const Header = ({
  searchInputValue,
  setInputValue,
  searchButtonHandler,
  paginationPageNum,
}: IProps) => {
  return (
    <div className={styles.headerWrapper}>
      <Search
        searchInputValue={searchInputValue}
        setInputValue={setInputValue}
        searchButtonHandler={searchButtonHandler}
        paginationPageNum={paginationPageNum}
      />
      <ErrorButton />
    </div>
  );
};

export { Header };
