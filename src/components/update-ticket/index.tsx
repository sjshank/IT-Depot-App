import React, { useCallback } from "react";
import WithFormLayout from "@/hoc/withFormLayout";
import { toast } from "react-toastify";
import { ICreateTicketFormFields } from "@/types/ticket";
import { NextRouter, useRouter } from "next/router";
import UpdateForm from "../forms/update";

const ModifyTicketDetails = () => {
  const router: NextRouter = useRouter();
  const handleUpdateTicket = useCallback(
    async (formFields: ICreateTicketFormFields) => {
      try {
        const res = await fetch("/api/ticket/update", {
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
  return <UpdateForm onSubmitAction={handleUpdateTicket} />;
};

const UpdateTicket = WithFormLayout(ModifyTicketDetails, {
  header: "Update Incident Details",
});

export default UpdateTicket;
