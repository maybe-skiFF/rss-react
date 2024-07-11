import { IPeopleCards } from 'src/interfaces';
import styles from './Pagination.module.scss';
import { useNavigate } from 'react-router-dom';

interface IProps {
  cardsData: IPeopleCards;
  paginationButtonHandler: (numPage: number) => void;
  searchInputValue: string;
}

const Pagination = ({
  cardsData,
  paginationButtonHandler,
  searchInputValue,
}: IProps) => {
  const pageCount = Math.ceil(cardsData.count / 10);
  let pageCountArr;
  const navigate = useNavigate();

  (function pageCountToArr(pageCount) {
    pageCountArr = [];
    for (let i = 1; i <= pageCount; i++) {
      pageCountArr.push(i);
    }
    return pageCountArr;
  })(pageCount);

  function updateURL(pageNum: number) {
    if (searchInputValue === '') {
      navigate(`/page=${pageNum}`);
    } else {
      navigate(`?search=${searchInputValue}&page=${pageNum}`);
    }
  }

  return (
    <ul className={styles.paginationWrapper}>
      {pageCountArr.map(pageNum => (
        <li
          onClick={() => {
            paginationButtonHandler(pageNum);
            updateURL(pageNum);
          }}
          key={pageNum}
          className={styles.paginationItem}
        >
          {pageNum}
        </li>
      ))}
    </ul>
  );
};

export { Pagination };
