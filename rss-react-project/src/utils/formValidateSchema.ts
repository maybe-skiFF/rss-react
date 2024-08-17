import * as yup from 'yup';
import { COUNTRIES } from '../constants/COUNTRIES';

const formValidateSchema = yup.object({
  name: yup
    .string()
    .required()
    .matches(/^[A-Z]/, 'Name must start with a capital letter'),
  age: yup
    .number()
    .transform((value: number) => (Number.isNaN(value) ? null : value))
    .required()
    .positive()
    .integer(),
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
    .required('You need to accept Terms and Conditions')
    .oneOf([true], 'You need to accept Terms and Conditions'),
  // picture: yup
  //   .mixed<FileList>()
  //   .test('file type', 'Allows only .png .jpeg', fileList => {
  //     if (fileList?.length !== 1) return false;
  //     const file = fileList[0];
  //     const pictureTypes = ['image/jpeg', 'image/png'];
  //     return pictureTypes.includes(file.type);
  //   })
  //   .test('file size', 'File size must be less than 1Mb', fileList => {
  //     if (fileList?.length !== 1) return false;
  //     const file = fileList[0];
  //     return !file || file.size <= 1000000;
  //   }),
  picture: yup
    .mixed<FileList | File>()
    .test('file type', 'Allows only .png .jpeg', value => {
      if (value instanceof FileList) {
        if (value?.length !== 1) return false;
        const pictureTypes = ['image/jpeg', 'image/png'];
        return pictureTypes.includes(value[0].type);
      } else if (value instanceof File) {
        const pictureTypes = ['image/jpeg', 'image/png'];
        return pictureTypes.includes(value.type);
      }
    })
    .test('file size', 'File size must be less than 1Mb', value => {
      if (value instanceof FileList) {
        if (value?.length !== 1) return false;
        return !value[0] || value[0].size <= 1000000;
      } else if (value instanceof File) {
        return value && value.size <= 1000000;
      }
    }),
  country: yup.string().required().oneOf(COUNTRIES, 'Select country'),
});

export { formValidateSchema };
