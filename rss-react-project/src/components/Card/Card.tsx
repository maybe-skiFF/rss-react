import { IPeopleCard } from 'src/interfaces';
import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { setDetaildPersoneName } from '../../redux/detaildPersoneSlice';
import { useNavigate } from 'react-router-dom';

interface ICardData {
  cardData: IPeopleCard;
  setIsOpenDetailCard: (isOpen: boolean) => void;
}

const Card = ({ cardData, setIsOpenDetailCard }: ICardData) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { name, birth_year, mass, height } = cardData;

  return (
    <div
      data-testid={name}
      onClick={e => {
        const target = e.target as HTMLDivElement;
        dispatch(setDetaildPersoneName(target.id));
        setIsOpenDetailCard(true);
        navigate(`people/detailed:${name.trim()}`);
      }}
      id={name}
      className={styles.cardWrapper}
    >
      <p id={name} className={styles.cardName}>
        Character: {name}
      </p>
      <p id={name} className={styles.cardDescription}>
        Was born: {birth_year}
      </p>
      <p id={name} className={styles.cardDescription}>
        Has mass: {mass}
      </p>
      <p id={name} className={styles.cardDescription}>
        Has height: {height}
      </p>
    </div>
  );
};

export { Card };
