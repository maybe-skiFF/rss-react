import { useContext } from 'react';
import styles from './ThemeButton.module.scss';
import { ThemeContext } from '../../context/ThemeContext';

const ThemeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      type="button"
      className={`${styles.themeButton} ${theme === 'dark' ? styles.dark : ''}`}
      onClick={() => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
      }}
    >
      ChangeTheme
    </button>
  );
};

export default ThemeButton;
