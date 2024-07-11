import { Component, ReactNode } from 'react';
import styles from './Loader.module.scss';

class Loader extends Component {
  render(): ReactNode {
    return <h1 className={styles.loader}>Loading...</h1>;
  }
}

export { Loader };
