import { FormikConfig, FormikHelpers, useFormik } from "formik";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { Box, CircularProgress } from "@mui/material";
import React from "react";
import dynamic from "next/dynamic";

type TFormikConfigProps = {
  WrapperComponent: React.ElementType;
  formikOptions: Omit<FormikConfig<any>, "onSubmit">;
  buttonLabel?: string;
};

const WithFormikForm = ({
  WrapperComponent,
  formikOptions,
  buttonLabel = "Proceed",
}: TFormikConfigProps): React.ElementType => {
  const FormWithFormikComponent = (props: any) => {
    const { onSubmitAction, ticket, notification } = props;
    const formik = useFormik({
      ...formikOptions,
      initialValues: ticket ? ticket : formikOptions.initialValues, //check added for create/updare ticket form
      enableReinitialize: true,
      onSubmit: (values: any, { setSubmitting }: FormikHelpers<any>) => {
        console.log("onsubmit");
        setTimeout(() => {
          setSubmitting(false);
          onSubmitAction(values);
        }, 1000);
      },
    });

    let ToastComponent = null;
    if (notification?.messages?.length > 0) {
      ToastComponent = dynamic(() => import("@/ui/MuiToast"), {
        ssr: false,
      });
    }

    return (
      <>
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
        {notification.messages.length > 0 && ToastComponent && (
          <ToastComponent
            messages={notification.messages}
            type={notification.type}
          />
        )}
      </>
    );
  };
  return FormWithFormikComponent;
};

export default WithFormikForm;
