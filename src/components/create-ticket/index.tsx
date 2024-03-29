import React, { useCallback } from "react";
import CreateForm from "../forms/create";
import WithFormLayout from "@/hoc/withFormLayout";
import { ICreateTicketFormFields } from "@/types/ticket";
import { NextRouter, useRouter } from "next/router";
import useNotification from "@/hooks/useNotification";
import { getSession } from "next-auth/react";

const SubmitNewTicket = () => {
  const [notification, setNotification] = useNotification();
  const router: NextRouter = useRouter();
  const handleSubmitTicket = useCallback(
    async (formFields: ICreateTicketFormFields) => {
      try {
        const session = await getSession();
        const user = session?.user;
        const res = await fetch("/api/ticket/create", {
          method: "POST",
          body: JSON.stringify({
            ...formFields,
            createdBy: user?.email,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        if (data.status !== "Success") {
          setNotification((notification) => ({
            ...notification,
            type: "error",
            messages: data.errors,
          }));
          return;
        }
        router.push("/dashboard");
      } catch (err) {
        console.error(err);
      }
    },
    [router]
  );
  return (
    <CreateForm
      onSubmitAction={handleSubmitTicket}
      notification={notification}
    />
  );
};

const CreateTicketContainer = WithFormLayout(SubmitNewTicket, {
  header: "Report Incident",
  subHeader: "Capture, document & report your specific incident here",
});

export default CreateTicketContainer;
