import { IPeopleCards } from 'src/interfaces';
import styles from './DetaildCard.module.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface IProps {
  cardsData: IPeopleCards;
  setIsOpenDetailCard: (isOpen: boolean) => void;
}

const DetaildCard = ({ cardsData, setIsOpenDetailCard }: IProps) => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const personeName = useSelector(
    (state: RootState) => state.detaildPersone.persone,
  );

  const filteredPerson = cardsData?.results.filter(
    persone => persone.name === personeName,
  );

  const { name, birth_year, mass, height, skin_color, eye_color } =
    filteredPerson[0];

  return (
    <div
      className={`${styles.detailedCardWrapper} ${theme === 'dark' ? styles.dark : ''}`}
    >
      <button
        onClick={() => {
          setIsOpenDetailCard(false);
          navigate('people/');
        }}
        type="button"
        className={styles.detailedCardCloseBtn}
      >
        X
      </button>
      <h1 className={styles.detailedCardTitle}>Detailed description</h1>
      <p className={styles.detailedCardName}>Character: {name}</p>
      <p className={styles.detailedCardDescription}>Was born: {birth_year}</p>
      <p className={styles.detailedCardDescription}>Has mass: {mass}</p>
      <p className={styles.detailedCardDescription}>Has height: {height}</p>
      <p className={styles.detailedCardDescription}>
        Has skin color: {skin_color}
      </p>
      <p className={styles.detailedCardDescription}>
        Has eye color: {eye_color}
      </p>
    </div>
  );
};

export { DetaildCard };
