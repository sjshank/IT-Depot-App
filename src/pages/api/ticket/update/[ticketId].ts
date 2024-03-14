// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectDbCollection } from "@/services/connect-db";
import { TTicket } from "@/types/ticket";
import {
  TValidationError,
  executeCreateTcktInputValidation,
} from "@/utils/validation-rules";
import type { NextApiRequest, NextApiResponse } from "next";

type TData = {
  status: string;
  message: string;
  ticket: TTicket | null;
  error: string[] | TValidationError[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TData>
) {
  const { query, method } = req;
  try {
    if (method === "PATCH") {
      await executeCreateTcktInputValidation(req, res);
      const ticket = req.body;
      const ticketCollection = await connectDbCollection("tickets");
      const result = await ticketCollection.findOneAndUpdate(
        { ticketId: query.ticketId },
        { $set: { ...ticket } },
        { projection: { _id: 0 }, returnDocument: "after" }
      );
      if (!result) {
        res.status(404).json({
          status: "Not Found",
          message: "Record does not exists",
          ticket: null,
          error: ["Record does not exists"],
        });
        return;
      }
      res.status(200).json({
        status: "Success",
        message: "Ticket has been updated.",
        ticket: ticket,
        error: [],
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "Service Error",
      message: "Unable to update ticket",
      ticket: null,
      error: ["Unable to update ticket"],
    });
    return;
  }
}
