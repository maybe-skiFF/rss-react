import { COUNTRIES } from '../../constants/COUNTRIES';
import styles from '../styles/formStyles.module.scss';

const HookFormPage = () => {
  return (
    <div className={styles.formPageContainer}>
      <h1>HookFormPage</h1>
      <form>
        <div className={styles.formElementWrapper}>
          <label htmlFor="name" className={styles.formLabel}>
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className={styles.formInput}
          />
          <p className={styles.formErrorText}>Error: TODO</p>
        </div>

        <div className={styles.formElementWrapper}>
          <label htmlFor="age" className={styles.formLabel}>
            Age:
          </label>
          <input
            type="number"
            name="age"
            id="age"
            className={styles.formInput}
          />
          <p className={styles.formErrorText}>Error: TODO</p>
        </div>

        <div className={styles.formElementWrapper}>
          <label htmlFor="age" className={styles.formLabel}>
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className={styles.formInput}
          />
          <p className={styles.formErrorText}>Error: TODO</p>
        </div>

        <div className={styles.formElementWrapper}>
          <label htmlFor="password" className={styles.formLabel}>
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className={styles.formInput}
          />
          <p className={styles.formErrorText}>Error: TODO</p>
        </div>

        <div className={styles.formElementWrapper}>
          <label htmlFor="repeatPassword" className={styles.formLabel}>
            Repeat Password:
          </label>
          <input
            type="password"
            name="repeatPassword"
            id="repeatPassword"
            className={styles.formInput}
          />
          <p className={styles.formErrorText}>Error: TODO</p>
        </div>

        <div className={styles.formElementWrapper}>
          <label htmlFor="gender" className={styles.formLabel}>
            Choose your gender:
          </label>
          <select name="gender" id="gender" className={styles.formLabel}>
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <p className={styles.formErrorText}>Error: TODO</p>
        </div>

        <div className={styles.formElementWrapper}>
          <label
            htmlFor="confirm"
            className={`${styles.formLabel} ${styles.formLabelCheckbox}`}
          >
            Accept Terms and Conditions agreement:
          </label>
          <input
            className={styles.formCheckbox}
            type="checkbox"
            name="confirm"
            id="confirm"
          />
          <p className={styles.formErrorText}>Error: TODO</p>
        </div>

        <div className={styles.formElementWrapper}>
          <label htmlFor="picture" className={styles.formLabel}>
            Add picture:
          </label>
          <input
            className={styles.formInputFile}
            type="file"
            name="picture"
            id="picture"
          />
          <p className={styles.formErrorText}>Error: TODO</p>
        </div>

        <div className={styles.formElementWrapper}>
          <label htmlFor="country" className={styles.formLabel}>
            Country:
          </label>
          <input
            className={styles.formInput}
            name="country"
            id="country"
            list="countries"
          />
          <datalist id="countries">
            {COUNTRIES.map(country => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </datalist>
          <p className={styles.formErrorText}>Error: TODO</p>
        </div>
      </form>
    </div>
  );
};

export { HookFormPage };
