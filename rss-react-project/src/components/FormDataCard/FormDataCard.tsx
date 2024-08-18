import { useSelector } from 'react-redux';
import { FormDataItem } from '../FormDataItem/FormDataItem';
import { RootState } from '../../redux/store';
import styles from './FormDataCard.module.scss';

const FormDataCard = () => {
  const formData = useSelector((state: RootState) => state.formData.formData);

  return (
    <div className={styles.formDataContainer}>
      <h2>Form Data</h2>
      {formData.map((item, index) => (
        <FormDataItem key={index} formData={item} />
      ))}
    </div>
  );
};

export { FormDataCard };
