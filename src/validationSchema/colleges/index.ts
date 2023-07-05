import * as yup from 'yup';

export const collegeValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  image: yup.string(),
  admin_id: yup.string().nullable(),
});
