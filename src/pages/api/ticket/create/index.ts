// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { TTicket } from "@/types/ticket";
import type { NextApiRequest, NextApiResponse } from "next";
import { customAlphabet } from "nanoid";
import {
  executeCreateTcktInputValidation,
  TValidationError,
} from "@/utils/validation-rules";
import { connectDbCollection } from "@/services/connect-db";

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
  if (req.method === "POST") {
    await executeCreateTcktInputValidation(req, res);
    const {
      title,
      description,
      category,
      status,
      priority,
      progress,
      assignedTo,
      createdBy,
    } = req.body;
    const ticketCollection = await connectDbCollection("tickets");
    const result = await ticketCollection.insertOne({
      title,
      description,
      category,
      status,
      priority,
      progress,
      ticketId: customAlphabet(`1234567890`, 10)(6),
      createdBy: createdBy,
      assignedTo: assignedTo,
      createdOn: `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`,
    });
    if (!result) {
      res.status(500).json({
        status: "Service Error",
        message: "Unable to create ticket",
        ticket: null,
        error: ["Unable to create ticket"],
      });
      return;
    }
    res.status(200).json({
      status: "Success",
      message: "Ticket submitted successfully.",
      ticket: req.body,
      error: [],
    });
  }
}
