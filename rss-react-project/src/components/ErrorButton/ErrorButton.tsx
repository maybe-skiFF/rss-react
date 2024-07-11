import { useState } from 'react';
import styles from './ErrorButton.module.scss';

const ErrorButton = () => {
  const [counter, setCounter] = useState<number>(0);

  function handleClick() {
    setCounter(1);
  }

  if (counter === 1) {
    throw new Error();
  }
  return (
    <button
      className={styles.errorButton}
      type="button"
      onClick={() => handleClick()}
    >
      Error
    </button>
  );
};

export { ErrorButton };
