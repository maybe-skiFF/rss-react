import { IPeopleCards } from 'src/interfaces';
import styles from './Pagination.module.scss';
import { useNavigate } from 'react-router-dom';

interface IProps {
  cardsData: IPeopleCards;
  paginationButtonHandler: (numPage: number) => void;
  searchInputValue: string;
  setPaginationPageNum: (numPage: number) => void;
}

const Pagination = ({
  cardsData,
  paginationButtonHandler,
  searchInputValue,
  setPaginationPageNum,
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

  function paginationUpdateURL(pageNum: number) {
    if (searchInputValue === '') {
      navigate(`/page=${pageNum}`);
    } else {
      navigate(`/page=${pageNum}?search=${searchInputValue}`);
    }
    setPaginationPageNum(pageNum);
  }

  return (
    <ul className={styles.paginationWrapper}>
      {pageCountArr.map(pageNum => (
        <li
          onClick={() => {
            paginationButtonHandler(pageNum);
            paginationUpdateURL(pageNum);
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
