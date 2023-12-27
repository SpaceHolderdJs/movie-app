import * as Yup from "yup";

export const validationSchema = Yup.object({
    email: Yup.string().email("invalid email").required("required"),
    password: Yup.string().required("required").min(6, "too short password!"),
});
