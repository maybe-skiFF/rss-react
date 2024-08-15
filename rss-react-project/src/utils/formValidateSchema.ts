import * as yup from 'yup';
import { COUNTRIES } from '../constants/COUNTRIES';

const formValidateSchema = yup.object({
  name: yup
    .string()
    .required()
    .matches(/^[A-Z]/, 'Name must start with a capital letter'),
  age: yup.number().required().positive(),
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .matches(/[0-9]/, 'Password should contains number')
    .matches(/[A-Z]/, 'Password should contains a capital letter')
    .matches(/[a-z]/, 'Password should contains a lowercase letter')
    .matches(
      /[!$@#&]/,
      'Password should contains one of special character !-$-@-#-&',
    ),
  repeatPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'Password should be match'),
  gender: yup.string().required().oneOf(['Male', 'Female']),
  confirm: yup
    .boolean()
    .required()
    .oneOf([true], 'You need to accept Terms and Conditions'),
  picture: yup
    .mixed<File>()
    .test(
      'file type',
      'Allows only .png .jpeg',
      value =>
        value && (value.type === 'image/jpeg' || value.type === 'image/png'),
    )
    .test(
      'file size',
      'File size must be less than 1Mb',
      value => value && value.size <= 1000000,
    ),
  country: yup.string().required().oneOf(COUNTRIES, 'Select country'),
});

export { formValidateSchema };
