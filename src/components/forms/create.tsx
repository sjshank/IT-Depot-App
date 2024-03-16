import React from "react";
import { FormikConfig } from "formik";
import WithFormikForm from "@/hoc/WithFormikForm";
import { CreateTicketSchema } from "@/utils/yup-schemas";
import { ICreateTicketFormFields, TNotification } from "@/types/ticket";
import ConnectedForm from "./connected-form";

type TCreateTicketProps = {
  onSubmitAction: (formFields: ICreateTicketFormFields) => void;
  formik?: any;
  notification: TNotification;
};

const formikOptions: Omit<FormikConfig<any>, "onSubmit"> = {
  initialValues: {
    title: "",
    priority: 1,
    description: "",
    category: "access control",
    status: "not started",
    progress: 0,
    assignedTo: "sshankariya@gmail.com",
  },

  validationSchema: CreateTicketSchema,
};

const CreateTicketFormik: React.FunctionComponent<TCreateTicketProps> = ({
  formik,
}: TCreateTicketProps) => {
  return <ConnectedForm formik={formik} createMode={true} />;
};

const CreateForm = WithFormikForm({
  WrapperComponent: CreateTicketFormik,
  formikOptions,
  buttonLabel: "Submit",
});

export default CreateForm;
