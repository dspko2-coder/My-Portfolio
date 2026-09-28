import * as Yup from "yup";

export const contactValidationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required("Please enter your name."),
  email: Yup.string()
    .trim()
    .email("Please enter a valid email.")
    .required("Please enter your email."),
  subject: Yup.string()
    .trim(),
  message: Yup.string()
    .trim()
    .required("Please add a short message."),
});

export default {
  contactValidationSchema,
};
