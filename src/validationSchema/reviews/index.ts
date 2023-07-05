import * as yup from 'yup';

export const reviewValidationSchema = yup.object().shape({
  status: yup.string().required(),
  college_id: yup.string().nullable(),
  admin_id: yup.string().nullable(),
});
