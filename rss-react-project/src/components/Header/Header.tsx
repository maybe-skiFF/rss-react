import { Search } from '../Search/Search';
import styles from './Header.module.scss';
import { ErrorButton } from '../ErrorButton/ErrorButton';

interface IProps {
  paginationPageNum: number;
}
const Header = ({ paginationPageNum }: IProps) => {
  return (
    <div className={styles.headerWrapper}>
      <Search paginationPageNum={paginationPageNum} />
      <ErrorButton />
    </div>
  );
};

export { Header };
