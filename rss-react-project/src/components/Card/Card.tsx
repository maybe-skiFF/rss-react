import { IPeopleCard } from 'src/interfaces';
import styles from './Card.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setDetaildPersoneName } from '../../redux/detaildPersoneSlice';
import { useContext, useState } from 'react';
import {
  setFavoritePeople,
  removeFavoritePeople,
} from '../../redux/favoritePeopleSlice';
import { RootState } from '../../redux/store';
import { ThemeContext } from '../../context/ThemeContext';
import { useRouter } from 'next/router';

interface ICardData {
  cardData: IPeopleCard;
  setIsOpenDetailCard: (isOpen: boolean) => void;
}

const Card = ({ cardData, setIsOpenDetailCard }: ICardData) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);
  const favoritePeoplesInStore = useSelector(
    (state: RootState) => state.favoritePeople.favoritePeople,
  );
  const [checked, setChecked] = useState(false);
  const { name, birth_year, mass, height } = cardData;
  const favoritePeopleData = {
    name,
    birth_year,
    mass,
    height,
  };

  const query = { ...router.query };
  query.name = name.trim();

  favoritePeoplesInStore.forEach(item => {
    if (item.name.includes(name) && checked === false) {
      setChecked(true);
    }
  });

  const favoritePeopleHandler = () => {
    if (!checked) {
      dispatch(setFavoritePeople(favoritePeopleData));
    } else {
      dispatch(removeFavoritePeople(favoritePeopleData));
    }
  };

  return (
    <div
      data-testid={name}
      onClick={e => {
        const target = e.target as HTMLDivElement;
        dispatch(setDetaildPersoneName(target.id));
        setIsOpenDetailCard(true);
        void router.push({ pathname: router.pathname, query });
      }}
      id={name}
      className={`${styles.cardWrapper} ${theme === 'dark' ? styles.dark : ''}`}
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
      <input
        className={styles.test}
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        onClick={e => {
          e.stopPropagation();
          setChecked(!checked);
          favoritePeopleHandler();
        }}
      />
    </div>
  );
};

export default Card;
