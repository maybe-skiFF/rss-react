import { useContext, useState } from 'react';
import styles from './ErrorButton.module.scss';
import { ThemeContext } from '../../context/ThemeContext';

const ErrorButton = () => {
  const [counter, setCounter] = useState<number>(0);
  const { theme } = useContext(ThemeContext);

  function handleClick() {
    setCounter(1);
  }

  if (counter === 1) {
    throw new Error();
  }
  return (
    <button
      className={`${styles.errorButton} ${theme === 'dark' ? styles.dark : ''}`}
      type="button"
      onClick={() => handleClick()}
    >
      Error
    </button>
  );
};

export { ErrorButton };
