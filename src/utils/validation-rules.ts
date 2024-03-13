import InitMiddleware from "@/lib/init-middleware";
import ValidateMiddleware from "@/lib/validate-middleware";
import { check, validationResult, ValidationError } from "express-validator";

export type TValidationError = ValidationError;

export const executeLoginInputValidation = InitMiddleware(
  ValidateMiddleware(
    [
      check("email")
        .trim()
        .isEmail()
        .normalizeEmail()
        .escape()
        .withMessage("Not a valid e-mail address"),
    ],
    validationResult
  )
);

export const executeCreateTcktInputValidation = InitMiddleware(
  ValidateMiddleware(
    [
      check("title")
        .trim()
        .notEmpty()
        .escape()
        .withMessage("Title is required"),
      check("description")
        .trim()
        .notEmpty()
        .escape()
        .withMessage("Description is required"),
      check("priority")
        .trim()
        .isInt({ gt: 0, lt: 6 })
        .toInt(10)
        .withMessage("Priority is required and must be an integer"),
      check("category")
        .trim()
        .notEmpty()
        .escape()
        .withMessage("Category is required"),
      check("status")
        .trim()
        .notEmpty()
        .escape()
        .withMessage("Status is required"),
      check("progress").trim().optional(),
    ],
    validationResult
  )
);
