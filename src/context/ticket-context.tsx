import { TTicket } from "@/types/ticket";
import React, { createContext, useState } from "react";

type TTicketContext = {
  ticket: TTicket;
  isTicketModalOpened: boolean;
  showTicketViewModal: (ticket: TTicket) => void;
  hideTicketViewModal: () => void;
};

export const TicketContext = createContext<TTicketContext>(
  {} as TTicketContext
);

const TicketContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [showModal, setModalFlag] = useState<boolean>(false);
  const [ticket, setTicketData] = useState<TTicket>({} as TTicket);

  const showTicketViewModalHandler = (_ticket: TTicket) => {
    setModalFlag(true);
    setTicketData(_ticket);
  };
  const hideTicketViewModalHandler = () => {
    setModalFlag(false);
    setTicketData({} as TTicket);
  };

  return (
    <TicketContext.Provider
      value={{
        isTicketModalOpened: showModal,
        showTicketViewModal: showTicketViewModalHandler,
        hideTicketViewModal: hideTicketViewModalHandler,
        ticket: ticket,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export default TicketContextProvider;
