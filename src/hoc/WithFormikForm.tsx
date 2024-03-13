import { FormikConfig, FormikHelpers, useFormik } from "formik";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { Box, CircularProgress } from "@mui/material";
import React from "react";

type TFormikConfigProps = {
  WrapperComponent: React.ElementType;
  formikOptions: Omit<FormikConfig<any>, "onSubmit">;
  buttonLabel?: string;
};

const WithFormikForm = ({
  WrapperComponent,
  formikOptions,
  buttonLabel = "Proceed",
}: TFormikConfigProps) => {
  const FormWithFormikComponent = (props: any) => {
    const { onSubmitAction } = props;
    const formik = useFormik({
      ...formikOptions,
      onSubmit: (values: any, { setSubmitting }: FormikHelpers<any>) => {
        console.log("onsubmit");
        setTimeout(() => {
          setSubmitting(false);
          onSubmitAction(values);
        }, 1000);
      },
    });
    return (
      <FormControl
        component="form"
        variant="standard"
        sx={{ width: { md: "50%" } }}
        onSubmit={formik.handleSubmit}
        noValidate
      >
        <WrapperComponent {...props} formik={formik} />
        <Box
          component="div"
          sx={{ m: 1, position: "relative", alignSelf: "center" }}
        >
          <Button
            variant="contained"
            disabled={formik.isSubmitting}
            type="submit"
          >
            {buttonLabel}
          </Button>
          {formik.isSubmitting && (
            <CircularProgress
              size={24}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "-12px",
                marginLeft: "-12px",
              }}
            />
          )}
        </Box>
      </FormControl>
    );
  };
  return FormWithFormikComponent;
};

export default WithFormikForm;
