import type { NextApiRequest, NextApiResponse } from "next";
import {
  executeLoginInputValidation,
  TValidationError,
} from "@/utils/validation-rules";
import { connectDbCollection } from "@/services/connect-db";

type TData = {
  status: string;
  message: string;
  user: any;
  errors: string[] | TValidationError[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TData>
) {
  if (req.method === "POST") {
    await executeLoginInputValidation(req, res);
    const { email } = req.body;
    const { connection, dbCollection: userCollection } =
      await connectDbCollection("users");
    const result = await userCollection.findOne({ email });
    connection.close();
    if (!result) {
      res.status(404).json({
        status: "Not Found",
        message: "User does not exists",
        user: null,
        errors: ["User does not exists"],
      });
      return;
    }

    res.status(200).json({
      status: "Success",
      message: "User details found",
      user: result,
      errors: [],
    });
  }
}
