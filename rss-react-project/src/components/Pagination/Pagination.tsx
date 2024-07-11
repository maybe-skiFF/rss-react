import { IPeopleCards } from 'src/interfaces';
import styles from './Pagination.module.scss';

interface IProps {
  cardsData: IPeopleCards;
}

const Pagination = ({ cardsData }: IProps) => {
  console.log(cardsData);
  return (
    <ul className={styles.paginationWrapper}>
      <li className={styles.paginationItem}>1</li>
      <li className={styles.paginationItem}>2</li>
    </ul>
  );
};

export { Pagination };
