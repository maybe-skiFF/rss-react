import { Component, ErrorInfo, ReactNode } from 'react';
import styles from './ErrorBoundary.module.scss';

interface IProps {
  children: ReactNode;
}

class ErrorBoundary extends Component<IProps> {
  state = {
    error: null,
    errorInfo: null,
  };

  constructor(props: IProps) {
    super(props);
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ error: error, errorInfo: errorInfo });
  }

  render(): ReactNode {
    if (this.state.errorInfo) {
      return (
        <div className={styles.errorBoundaryWrapper}>
          <h1 className={styles.errorTitle}>Something went wrong.</h1>
          <button
            onClick={() => location.reload()}
            className={styles.restartButton}
            type="button"
          >
            RestartPage
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
