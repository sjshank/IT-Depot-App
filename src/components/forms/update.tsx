import React from "react";
import { FormikConfig } from "formik";
import WithFormikForm from "@/hoc/WithFormikForm";
import { CreateTicketSchema } from "@/utils/yup-schemas";
import { ICreateTicketFormFields } from "@/types/ticket";
import ConnectedForm from "./connected-form";

type TUpdateTicketProps = {
  onSubmitAction: (formFields: ICreateTicketFormFields) => void;
  formik?: any;
};

const formikOptions: Omit<FormikConfig<any>, "onSubmit"> = {
  initialValues: {
    title: "",
    priority: 1,
    description: "",
    category: "hardware",
    status: "not started",
    progress: 0,
  },

  validationSchema: CreateTicketSchema,
};

const UpdateTicketFormik: React.FunctionComponent<TUpdateTicketProps> = ({
  formik,
}: TUpdateTicketProps) => {
  return <ConnectedForm formik={formik} isCreate={true} />;
};

const UpdateForm = WithFormikForm({
  WrapperComponent: UpdateTicketFormik,
  formikOptions,
  buttonLabel: "Update",
});

export default UpdateForm;