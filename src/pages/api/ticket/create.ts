// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mongodbConnection from "@/lib/db";
import { TTicket } from "@/types/ticket";
import type { NextApiRequest, NextApiResponse } from "next";
import { customAlphabet } from "nanoid";
import {
  executeCreateTcktInputValidation,
  TValidationError,
} from "@/utils/validation-rules";

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
    const { title, description, category, status, priority, progress } =
      req.body;
    const connection = await mongodbConnection;
    const db = await connection.db(process.env.MONGODB_NAME);
    const userCollection = await db.collection("tickets");
    const result = await userCollection.insertOne({
      title,
      description,
      category,
      status,
      priority,
      progress,
      ticketId: customAlphabet(`1234567890`, 10)(6),
      createdBy: "sshankariya@gmail.com",
      assignedTo: "djsaurabh8@gmail.com",
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
