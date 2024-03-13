import { string, number, object } from "yup";

export const LogInSchema = object({
  email: string()
    .email("Enter a valid e-mail address")
    .required("Email is required"),
});

export const CreateTicketSchema = object({
  title: string().required("Title is required"),
  description: string().required("Description is required"),
  priority: number().required("Priority is required").min(1).max(5).default(1),
  category: string().required("Category is required").default("hardware"),
  status: string().required("Status is required").default("not started"),
  progress: number().optional().default(10),
  createdOn: string()
    .optional()
    .default(() => new Date().toLocaleString()),
});
