import React, { useCallback } from "react";
import CreateForm from "../forms/create";
import WithFormLayout from "@/hoc/withFormLayout";
import { toast } from "react-toastify";
import { ICreateTicketFormFields } from "@/types/ticket";
import { NextRouter, useRouter } from "next/router";

const SubmitNewTicket = () => {
  const router: NextRouter = useRouter();
  const handleSubmitTicket = useCallback(
    async (formFields: ICreateTicketFormFields) => {
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
        router.push("/dashboard");
      } catch (err) {
        console.error(err);
      }
    },
    []
  );
  return <CreateForm onSubmitAction={handleSubmitTicket} />;
};

const CreateTicket = WithFormLayout(SubmitNewTicket, {
  header: "Report Incident",
});

export default CreateTicket;