import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import EmailRounded from "@mui/icons-material/EmailRounded";
import { validateEmail } from "@/utils/helper";
import WithFormikForm from "@/hoc/WithFormikForm";
import { FormikConfig } from "formik";
import { LogInSchema } from "@/utils/yup-schemas";
import { ILogInFormFields, TNotification } from "@/types/ticket";

type TLoginProps = {
  onSubmitAction: (email: string) => void;
  formik?: any;
  notification: TNotification;
};

const formikOptions: Omit<FormikConfig<any>, "onSubmit"> = {
  initialValues: {
    email: "",
  },
  validate(values: ILogInFormFields) {
    let errors = {};
    const isValidEmail = validateEmail(values.email);
    if (!isValidEmail) {
      return errors;
    }
    return { email: isValidEmail } as typeof values;
  },
  validationSchema: LogInSchema,
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
        tabIndex={0}
        placeholder="Please enter 'johndoe@example.com'"
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
