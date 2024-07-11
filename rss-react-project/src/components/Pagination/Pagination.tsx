import { IPeopleCards } from 'src/interfaces';
import styles from './Pagination.module.scss';

interface IProps {
  cardsData: IPeopleCards;
}

const Pagination = ({ cardsData }: IProps) => {
  const pageCount = Math.ceil(cardsData.count / 10);
  let pageCountArr;

  (function pageCountToArr(pageCount) {
    pageCountArr = [];
    for (let i = 1; i <= pageCount; i++) {
      pageCountArr.push(i);
    }
    return pageCountArr;
  })(pageCount);

  console.log(pageCountArr);
  // return (
  //   <ul className={styles.paginationWrapper}>
  //     <li className={styles.paginationItem}>1</li>
  //     <li className={styles.paginationItem}>2</li>
  //   </ul>
  // );

  return (
    <ul className={styles.paginationWrapper}>
      {pageCountArr.map(pageNum => (
        <li key={pageNum} className={styles.paginationItem}>
          {pageNum}
        </li>
      ))}
    </ul>
  );
};

export { Pagination };
