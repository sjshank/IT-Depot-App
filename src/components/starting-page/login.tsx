import React from "react";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import EmailRounded from "@mui/icons-material/EmailRounded";
import { validateEmail } from "@/utils/helper";
import WithFormikForm from "@/hoc/WithFormikForm";
import { FormikConfig } from "formik";

type TLoginProps = {
  onSubmitAction: (email: string) => void;
  formik?: any;
};

interface LogInFields {
  email: string;
}

const logInSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid e-mail address")
    .required("Email is required"),
});

const formikOptions: Omit<FormikConfig<any>, "onSubmit"> = {
  initialValues: {
    email: "",
  },
  validate(values: LogInFields) {
    let errors = {};
    const isValidEmail = validateEmail(values.email);
    if (!isValidEmail) {
      return errors;
    }
    return { email: isValidEmail } as typeof values;
  },
  validationSchema: logInSchema,
};

const SignIn: React.FunctionComponent<TLoginProps> = ({
  formik,
}: TLoginProps): JSX.Element => {
  return (
    <>
      <TextField
        id="email"
        label="Email Id"
        autoComplete="false"
        name="email"
        size="medium"
        placeholder="Your email address"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailRounded fontSize="large" />
            </InputAdornment>
          ),
        }}
        variant="standard"
        sx={{ paddingBottom: 1, minHeight: "80px" }}
      />
    </>
  );
};

const Login = WithFormikForm({
  WrapperComponent: SignIn,
  formikOptions,
});

export default Login;
