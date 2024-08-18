import { Link } from 'react-router-dom';
import { LinkButton } from '../../components/LinkButton/LinkButton';
import { SERVICE_MESSAGES } from '../../constants/SERVICE_MESSAGES';
import styles from './MainPage.module.scss';
import { FormDataCard } from '../../components/FormDataCard/FormDataCard';

const MainPage = () => {
  return (
    <div className={styles.mainPageContainer}>
      <h1>MainPage</h1>
      <div className={styles.linkButtonWrapper}>
        <Link to="/hookFormPage">
          <LinkButton buttonName={SERVICE_MESSAGES.hookFormButtonName} />
        </Link>
        <Link to="/uncontrolledFormPage">
          <LinkButton
            buttonName={SERVICE_MESSAGES.uncontrolledFormButtonName}
          />
        </Link>
      </div>
      <FormDataCard />
    </div>
  );
};

export { MainPage };
