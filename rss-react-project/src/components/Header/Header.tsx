import { Search } from '../Search/Search';
import styles from './Header.module.scss';
import { ErrorButton } from '../ErrorButton/ErrorButton';

interface IProps {
  searchInputValue: string;
  setInputValue: (inputValue: string) => void;
  paginationPageNum: number;
}
const Header = ({
  searchInputValue,
  setInputValue,
  paginationPageNum,
}: IProps) => {
  return (
    <div className={styles.headerWrapper}>
      <Search
        searchInputValue={searchInputValue}
        setInputValue={setInputValue}
        paginationPageNum={paginationPageNum}
      />
      <ErrorButton />
    </div>
  );
};

export { Header };
