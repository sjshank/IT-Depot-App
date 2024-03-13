import { ICreateTicketFields } from "@/pages/ticket/create";
import React from "react";
import CreateTicketForm from "../forms/create";
import WithFormLayout from "@/hoc/withFormLayout";
import { toast } from "react-toastify";

const SubmitNewTicket = () => {
  const handleCreateTicket = async (formFields: ICreateTicketFields) => {
    try {
      const res = await fetch("/api/ticket/create", {
        method: "POST",
        body: JSON.stringify({ ...formFields }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data.status !== "Success") {
        data.errors.forEach((error: string) =>
          toast.error(error, { theme: "dark" })
        );
        return;
      }
    } catch (err) {
      console.error(err);
    }
  };
  return <CreateTicketForm onSubmitAction={handleCreateTicket} />;
};

const CreateTicket = WithFormLayout(SubmitNewTicket, {
  header: "Submit Ticket",
});

export default CreateTicket;
