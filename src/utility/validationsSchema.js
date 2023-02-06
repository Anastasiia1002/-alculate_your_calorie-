import * as yup from 'yup';

export const validationsSchema = yup.object().shape({
  height: yup
    .number()
    .typeError('you must specify a number')
    .required('Height is required!')
    .positive('Only positive number')
    .integer('Only number'),
  age: yup
    .number('Only number')
    .required('Age is required!')
    .positive('Only positive number')
    .integer('Only number'),
  currentWeight: yup
    .number('Only positive number')
    .required('Current weight is required!')
    .positive(),
  desiredWeight: yup
    .number('Only positive number')
    .required('Desired weight is required!')
    .positive(),
});
