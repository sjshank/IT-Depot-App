import type { NextApiRequest, NextApiResponse } from "next";
export default function validateMiddleware(
  validations: any[],
  validationResult: (req: NextApiRequest) => any
) {
  return async (req: NextApiRequest, res: NextApiResponse, next: any) => {
    console.log(req.body);
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(422).json({
      status: "Error",
      message: "Input validation failed",
      errors: errors.array().map((error: any) => error["msg"]),
    });
  };
}
