import { IPeopleCard } from 'src/interfaces';
import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { setDetaildPersoneName } from '../../redux/detaildPersoneSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  setFavoritePeople,
  removeFavoritePeople,
} from '../../redux/favoritePeopleSlice';

interface ICardData {
  cardData: IPeopleCard;
  setIsOpenDetailCard: (isOpen: boolean) => void;
}

const Card = ({ cardData, setIsOpenDetailCard }: ICardData) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const { name, birth_year, mass, height } = cardData;
  const favoritePeopleData = {
    name,
    birth_year,
    mass,
    height,
  };

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
      <input
        className={styles.test}
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        onClick={e => {
          console.log('test');
          e.stopPropagation();
          setChecked(!checked);
          favoritePeopleHandler();
        }}
      />
    </div>
  );
};

export { Card };
