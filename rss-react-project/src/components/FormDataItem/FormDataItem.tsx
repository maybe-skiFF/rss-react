import { IFormData } from '../../interfaces';
import styles from './FormDataItem.module.scss';

interface IProps {
  formData: IFormData;
}

const FormDataItem = ({ formData }: IProps) => {
  return (
    <div className={styles.formItemWrapper}>
      <span>Name: {formData.name}</span>
      <span>Age: {formData.age}</span>
      <span>Email: {formData.email}</span>
      <span>Password: {formData.password}</span>
      <span>Gender: {formData.gender}</span>
      <span>Accept: {formData.confirm ? 'true' : ''}</span>
      <img className={styles.formDataImg} src={formData.picture} />
      <span>Country: {formData.country}</span>
    </div>
  );
};

export { FormDataItem };
