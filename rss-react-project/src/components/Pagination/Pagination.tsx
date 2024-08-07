import { IPeopleCards } from 'src/interfaces';
import styles from './Pagination.module.scss';
import { paginationPageChange } from '../../redux/paginationPageSlice';
import { useDispatch } from 'react-redux';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { useRouter } from 'next/router';

interface IProps {
  cardsData: IPeopleCards;
  searchInputValue: string;
}

const Pagination = ({ cardsData, searchInputValue }: IProps) => {
  const dispatch = useDispatch();
  const pageCount = Math.ceil(cardsData.count / 10);
  let pageCountArr;
  const router = useRouter();
  const query = { ...router.query };
  const { theme } = useContext(ThemeContext);

  (function pageCountToArr(pageCount) {
    pageCountArr = [];
    for (let i = 1; i <= pageCount; i++) {
      pageCountArr.push(i);
    }
    return pageCountArr;
  })(pageCount);

  function paginationUpdateURL(pageNum: number) {
    query.search = searchInputValue;
    query.page = String(pageNum);
    if (searchInputValue === '') {
      void router.push({ pathname: router.pathname, query });
    } else {
      void router.push({ pathname: router.pathname, query });
    }
  }

  return (
    <ul
      className={`${styles.paginationWrapper} ${theme === 'dark' ? styles.paginationWrapperDark : ''}`}
    >
      {pageCountArr.map(pageNum => (
        <li
          onClick={() => {
            paginationUpdateURL(pageNum);
            dispatch(paginationPageChange(pageNum));
          }}
          key={pageNum}
          className={`${styles.paginationItem} ${theme === 'dark' ? styles.dark : ''}`}
        >
          {pageNum}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
