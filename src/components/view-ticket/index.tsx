import { TicketContext } from "@/context/ticket-context";
import React, { useContext } from "react";
import dynamic from "next/dynamic";
import TicketContent from "./view-ticket-content";

const ViewTicketContainer = () => {
  const { ticket, isTicketModalOpened, hideTicketViewModal } =
    useContext(TicketContext);

  let TicketModalComponent = null;
  if (isTicketModalOpened && ticket !== null) {
    TicketModalComponent = dynamic(() => import("@/ui/MuiDialog"), {
      ssr: false,
    });
  }
  return (
    <>
      {TicketModalComponent && (
        <TicketModalComponent
          buttonLbl="Close"
          open={isTicketModalOpened}
          handleClose={hideTicketViewModal}
          modalContent={<TicketContent ticket={ticket} />}
          modalId="ticket-detials"
          modalTitle={ticket.title}
        />
      )}
    </>
  );
};

export default ViewTicketContainer;
