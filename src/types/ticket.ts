import { AlertColor } from "@mui/material";

type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

type Range<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

export type TTicket = {
  title: string;
  priority: Range<1, 6>;
  description: string;
  category: string;
  ticketId: string;
  status: "not started" | "started" | "done";
  progress: string;
  createdBy: string;
  assignedTo: string;
};

export interface ICreateTicketFormFields {
  title: string;
  priority: number;
  description: string;
  category: string;
  status: string;
  progress: number;
  createdBy: string;
  assignedTo: string;
}

export interface ILogInFormFields {
  email: string;
}

export type TNotification = {
  type: AlertColor;
  messages: string[];
};
