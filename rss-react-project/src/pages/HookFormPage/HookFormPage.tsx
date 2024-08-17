import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/formStyles.module.scss';
import { RootState } from '../../redux/store';
import { SubmitHandler, useForm } from 'react-hook-form';
import { formValidateSchema } from '../../utils/formValidateSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { InferType } from 'yup';
import { pictureToBase64 } from '../../utils/pictureToBase64';
import { setFormData } from '../../redux/formDataSlice';
import { useNavigate } from 'react-router-dom';

const HookFormPage = () => {
  const countries = useSelector((state: RootState) => state.formData.countries);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(formValidateSchema),
  });

  const onSubmit: SubmitHandler<
    InferType<typeof formValidateSchema>
  > = async data => {
    const pictureType =
      data.picture instanceof FileList ? data.picture[0] : data.picture;
    const pictureToString = pictureType
      ? await pictureToBase64(pictureType)
      : '';

    dispatch(setFormData({ ...data, picture: pictureToString }));
    navigate('/');
  };

  return (
    <div className={styles.formPageContainer}>
      <h1>HookFormPage</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formWrapper}>
        <div className={styles.formElementWrapper}>
          <label htmlFor="name" className={styles.formLabel}>
            Name:
          </label>
          <input
            {...register('name')}
            type="text"
            name="name"
            id="name"
            className={styles.formInput}
          />
          <p className={styles.formErrorText}>{errors.name?.message ?? ''}</p>
        </div>

        <div className={styles.formElementWrapper}>
          <label htmlFor="age" className={styles.formLabel}>
            Age:
          </label>
          <input
            {...register('age')}
            type="number"
            name="age"
            id="age"
            className={styles.formInput}
          />
          <p className={styles.formErrorText}>{errors.age?.message ?? ''}</p>
        </div>

        <div className={styles.formElementWrapper}>
          <label htmlFor="email" className={styles.formLabel}>
            Email:
          </label>
          <input
            {...register('email')}
            type="email"
            name="email"
            id="email"
            className={styles.formInput}
          />
          <p className={styles.formErrorText}>{errors.email?.message ?? ''}</p>
        </div>

        <div className={styles.formElementWrapper}>
          <label htmlFor="password" className={styles.formLabel}>
            Password:
          </label>
          <input
            {...register('password')}
            type="password"
            name="password"
            id="password"
            className={styles.formInput}
          />
          <p className={styles.formErrorText}>
            {errors.password?.message ?? ''}
          </p>
        </div>

        <div className={styles.formElementWrapper}>
          <label htmlFor="repeatPassword" className={styles.formLabel}>
            Repeat Password:
          </label>
          <input
            {...register('repeatPassword')}
            type="password"
            name="repeatPassword"
            id="repeatPassword"
            className={styles.formInput}
          />
          <p className={styles.formErrorText}>
            {errors.repeatPassword?.message ?? ''}
          </p>
        </div>

        <div className={styles.formElementWrapper}>
          <label htmlFor="gender" className={styles.formLabel}>
            Choose your gender:
          </label>
          <select
            {...register('gender')}
            name="gender"
            id="gender"
            className={styles.formLabel}
          >
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <p className={styles.formErrorText}>{errors.gender?.message ?? ''}</p>
        </div>

        <div className={styles.formElementWrapper}>
          <label
            htmlFor="confirm"
            className={`${styles.formLabel} ${styles.formLabelCheckbox}`}
          >
            Accept Terms and Conditions agreement:
          </label>
          <input
            {...register('confirm')}
            className={styles.formCheckbox}
            type="checkbox"
            name="confirm"
            id="confirm"
            value="true"
          />
          <p className={styles.formErrorText}>
            {errors.confirm?.message ?? ''}
          </p>
        </div>

        <div className={styles.formElementWrapper}>
          <label htmlFor="picture" className={styles.formLabel}>
            Add picture:
          </label>
          <input
            {...register('picture')}
            className={styles.formInputFile}
            type="file"
            name="picture"
            id="picture"
          />
          <p className={styles.formErrorText}>
            {errors.picture?.message ?? ''}
          </p>
        </div>

        <div className={styles.formElementWrapper}>
          <label htmlFor="country" className={styles.formLabel}>
            Country:
          </label>
          <input
            {...register('country')}
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
          <p className={styles.formErrorText}>
            {errors.country?.message ?? ''}
          </p>
        </div>

        <button disabled={!isValid} type="submit" className={styles.formButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export { HookFormPage };
