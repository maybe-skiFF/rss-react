import { Component, ReactNode } from 'react';
import styles from './ErrorButton.module.scss';

class ErrorButton extends Component {
  state = {
    counter: 0,
  };

  handleClick() {
    this.setState({ counter: 1 });
  }

  render(): ReactNode {
    if (this.state.counter === 1) {
      throw new Error();
      // console.log(new Error());
      // console.error(new Error());
    }
    return (
      <button
        className={styles.errorButton}
        type="button"
        onClick={() => this.handleClick()}
      >
        Error
      </button>
    );
  }
}

export { ErrorButton };
