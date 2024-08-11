import { useDispatch, useSelector } from 'react-redux';
import styles from './Flyout.module.scss';
import { RootState } from '../../redux/store';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { clearFavoritePeople } from '../../redux/favoritePeopleSlice';

const Flyout = () => {
  const dispatch = useDispatch();
  const favoritePeopleData = useSelector(
    (state: RootState) => state.favoritePeople.favoritePeople,
  );
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${styles.flyoutWrapper} ${theme === 'dark' ? styles.flyoutWrapperDark : ''}`}
    >
      <p className={styles.flyoutText}>
        Selected {favoritePeopleData.length} items
      </p>
      <button
        onClick={() => dispatch(clearFavoritePeople([]))}
        type="button"
        className={`${styles.flyoutButton} ${theme === 'dark' ? styles.dark : ''}`}
      >
        Unselect all
      </button>
      <button
        type="button"
        className={`${styles.flyoutButton} ${theme === 'dark' ? styles.dark : ''}`}
      >
        Download
      </button>
    </div>
  );
};

export default Flyout;
