import { TicketContext } from "@/context/ticket-context";
import React, { Suspense, useContext } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import useNotification from "@/hooks/useNotification";
import { TNotification } from "@/types/ticket";

const ViewTicketContainer = () => {
  const [notification, setNotification] = useNotification();
  const { ticket, isTicketModalOpened, hideTicketViewModal } =
    useContext(TicketContext);
  const router = useRouter();

  const handleDeleteAction = async () => {
    const res = await fetch(`/api/ticket/delete/${ticket.ticketId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (data.status !== "Success") {
      setNotification((notification: TNotification) => ({
        ...notification,
        type: "error",
        messages: data.errors,
      }));
      return;
    }
    router.replace("/dashboard");
    hideTicketViewModal();
  };

  let TicketModalComponent = null;
  let TicketModalFooterComponent = null;
  let TicketModalContentComponent = null;
  if (isTicketModalOpened && ticket !== null) {
    TicketModalContentComponent = dynamic(
      () => import("./view-ticket-content"),
      {
        ssr: false,
      }
    );
    TicketModalComponent = dynamic(() => import("@/ui/MuiDialog"), {
      ssr: false,
    });
    TicketModalFooterComponent = dynamic(() => import("./view-ticket-footer"), {
      ssr: false,
    });
  }

  let ToastComponent = null;
  if (notification?.messages?.length > 0) {
    ToastComponent = dynamic(() => import("@/ui/MuiToast"), {
      ssr: false,
    });
  }

  return (
    <>
      <Suspense fallback={<p>Loading data...</p>}>
        {TicketModalComponent && (
          <TicketModalComponent
            footer={
              <>
                {TicketModalFooterComponent && (
                  <TicketModalFooterComponent
                    onClose={hideTicketViewModal}
                    onDelete={handleDeleteAction}
                  />
                )}
              </>
            }
            open={isTicketModalOpened}
            handleClose={hideTicketViewModal}
            modalContent={
              <>
                {TicketModalContentComponent && (
                  <TicketModalContentComponent ticket={ticket} />
                )}
              </>
            }
            modalId="ticket-detials"
            modalTitle={ticket.title}
          />
        )}
      </Suspense>
      {notification.messages.length > 0 && ToastComponent && (
        <ToastComponent
          messages={notification.messages}
          type={notification.type}
        />
      )}
    </>
  );
};

export default ViewTicketContainer;
