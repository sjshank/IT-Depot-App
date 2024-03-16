import React, { useCallback } from "react";
import WithFormLayout from "@/hoc/withFormLayout";
import { ICreateTicketFormFields, TTicket } from "@/types/ticket";
import UpdateForm from "../forms/update";
import useNotification from "@/hooks/useNotification";

const ModifyTicketDetails: React.FunctionComponent<any> = (
  ticket: TTicket
): JSX.Element => {
  const [notification, setNotification] = useNotification();

  const handleUpdateTicket = useCallback(
    async (formFields: ICreateTicketFormFields) => {
      try {
        const res = await fetch(`/api/ticket/update/${ticket.ticketId}`, {
          method: "PATCH",
          body: JSON.stringify({ ...formFields }),
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
        setNotification((notification) => ({
          ...notification,
          type: "success",
          messages: [data.message],
        }));
      } catch (err) {
        console.error(err);
      }
    },
    []
  );
  return (
    <UpdateForm
      onSubmitAction={handleUpdateTicket}
      ticket={ticket}
      notification={notification}
    />
  );
};

const UpdateTicketContainer = WithFormLayout(ModifyTicketDetails, {
  header: "Update Incident Details",
  subHeader: "Update your incident with additional details",
});

export default UpdateTicketContainer;
