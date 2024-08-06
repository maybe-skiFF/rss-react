import Search from '../Search/Search';
import styles from './Header.module.scss';
import ErrorButton from '../ErrorButton/ErrorButton';
import ThemeButton from '../ThemeButton/ThemeButton';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface IProps {
  paginationPageNum: number;
}
const Header = ({ paginationPageNum }: IProps) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${styles.headerWrapper} ${theme === 'dark' ? styles.dark : ''}`}
    >
      <Search paginationPageNum={paginationPageNum} />
      <ErrorButton />
      <ThemeButton />
    </div>
  );
};

export default Header;
