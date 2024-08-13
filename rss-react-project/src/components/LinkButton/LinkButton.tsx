import styles from './LinkButton.module.scss';

interface IProps {
  buttonName: string;
}

const LinkButton = ({ buttonName }: IProps) => {
  return (
    <button className={styles.linkButton} type="button">
      {buttonName}
    </button>
  );
};

export { LinkButton };
