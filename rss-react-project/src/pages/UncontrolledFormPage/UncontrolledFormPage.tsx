import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/formStyles.module.scss';
import { RootState } from '../../redux/store';
import { FormEvent, useState } from 'react';
import { formValidateSchema } from '../../utils/formValidateSchema';
import { pictureToBase64 } from '../../utils/pictureToBase64';
import { setFormData } from '../../redux/formDataSlice';
import * as yup from 'yup';
import { IFormValidationErrors } from '../../interfaces/index';
import { useNavigate } from 'react-router-dom';

const UncontrolledFormPage = () => {
  const countries = useSelector((state: RootState) => state.formData.countries);
  const [errors, setErrors] = useState<IFormValidationErrors>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const currentForm = event.currentTarget;
    const formData = new FormData(currentForm);
    const formValueFromData = Object.fromEntries(formData.entries());
    const pictureType = formValueFromData.picture as File;
    const pictureToString = await pictureToBase64(pictureType);

    try {
      const formValidation = await formValidateSchema.validate(
        formValueFromData,
        { abortEarly: false },
      );

      dispatch(setFormData({ ...formValidation, picture: pictureToString }));
      navigate('/');
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        let errorsList: IFormValidationErrors = {};
        for (const err of error.inner) {
          if (err.path && !(err.path in errorsList)) {
            errorsList = { ...errorsList, [err.path]: err.message };
          }
        }
        setErrors(errorsList);
      }
    }
  };

  return (
    <div className={styles.formPageContainer}>
      <h1>HookFormPage</h1>
      <form noValidate onSubmit={handleSubmit} className={styles.formWrapper}>
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
          <p className={styles.formErrorText}>{errors.name ?? ''}</p>
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
          <p className={styles.formErrorText}>{errors.age ?? ''}</p>
        </div>

        <div className={styles.formElementWrapper}>
          <label htmlFor="email" className={styles.formLabel}>
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className={styles.formInput}
          />
          <p className={styles.formErrorText}>{errors.email ?? ''}</p>
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
          <p className={styles.formErrorText}>{errors.password ?? ''}</p>
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
          <p className={styles.formErrorText}>{errors.repeatPassword ?? ''}</p>
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
          <p className={styles.formErrorText}>{errors.gender ?? ''}</p>
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
            value="true"
          />
          <p className={styles.formErrorText}>{errors.confirm ?? ''}</p>
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
          <p className={styles.formErrorText}>{errors.picture ?? ''}</p>
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
            {countries.map(country => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </datalist>
          <p className={styles.formErrorText}>{errors.country ?? ''}</p>
        </div>

        <button type="submit" className={styles.formButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export { UncontrolledFormPage };
