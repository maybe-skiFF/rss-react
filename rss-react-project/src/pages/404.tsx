import Link from 'next/link';
import styles from './Page404.module.scss';

const Page404 = () => {
  return (
    <div className={styles.page404Wrapper}>
      <h1 className={styles.page404Text}>
        The page you are looking for might be removed or is temporarily
        unavailable
      </h1>
      <Link href="/">
        <button className={styles.page404Btn}>Back To MainPage</button>
      </Link>
    </div>
  );
};

export default Page404;
