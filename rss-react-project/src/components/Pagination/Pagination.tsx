import { IPeopleCards } from 'src/interfaces';
import styles from './Pagination.module.scss';

interface IProps {
  cardsData: IPeopleCards;
  paginationButtonHandler: (numPage: number) => void;
}

const Pagination = ({ cardsData, paginationButtonHandler }: IProps) => {
  const pageCount = Math.ceil(cardsData.count / 10);
  let pageCountArr;

  (function pageCountToArr(pageCount) {
    pageCountArr = [];
    for (let i = 1; i <= pageCount; i++) {
      pageCountArr.push(i);
    }
    return pageCountArr;
  })(pageCount);

  return (
    <ul className={styles.paginationWrapper}>
      {pageCountArr.map(pageNum => (
        <li
          onClick={() => paginationButtonHandler(pageNum)}
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
