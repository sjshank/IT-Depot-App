import React, { useCallback } from "react";
import { object, string, number } from "yup";
import TextField from "@mui/material/TextField";
import { FormikConfig } from "formik";
import WithFormikForm from "@/hoc/WithFormikForm";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { ICreateTicketFields } from "@/pages/ticket/create";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { CATEGORIES, PRIORITIES, STATUS } from "@/utils/constants";

type TCreateTicketProps = {
  onSubmitAction: (formFields: ICreateTicketFields) => void;
  formik?: any;
};

const createTicketSchema = object({
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

const formikOptions: Omit<FormikConfig<any>, "onSubmit"> = {
  initialValues: {
    title: "",
    priority: 1,
    description: "",
    category: "hardware",
    status: "not started",
    progress: 0,
  },

  validationSchema: createTicketSchema,
};

const CreateTicketFormik: React.FunctionComponent<TCreateTicketProps> = ({
  formik,
}: TCreateTicketProps) => {
  const categoryOptions = useCallback(
    () =>
      CATEGORIES.map((category, index) => (
        <MenuItem key={`${category}-${index}`} value={category.toLowerCase()}>
          {category}
        </MenuItem>
      )),
    [CATEGORIES]
  );

  const statusOptions = useCallback(
    () =>
      STATUS.map((status, index) => (
        <MenuItem key={`${status}-${index}`} value={status.toLowerCase()}>
          {status}
        </MenuItem>
      )),
    [STATUS]
  );

  const prioritiesOptions = useCallback(
    () =>
      PRIORITIES.map((priority) => (
        <FormControlLabel
          key={`${priority}`}
          value={priority}
          control={<Radio />}
          label={priority}
        />
      )),
    [STATUS]
  );

  return (
    <>
      <TextField
        id="title"
        label="Title"
        name="title"
        size="medium"
        required
        color="primary"
        placeholder="Enter ticket title"
        value={formik.values.title}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
        variant="standard"
        sx={{ marginBottom: 3, minHeight: "80px" }}
      />
      <TextField
        id="description"
        label="Description"
        name="description"
        size="medium"
        required
        color="primary"
        placeholder="Enter ticket description"
        value={formik.values.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
        variant="standard"
        sx={{ marginBottom: 3, minHeight: "80px" }}
      />
      <FormControl sx={{ marginBottom: 5 }}>
        <InputLabel color="primary">Category</InputLabel>
        <Select
          id="category"
          label="Category"
          name="category"
          size="medium"
          required
          color="primary"
          value={formik.values.category}
          onChange={formik.handleChange}
        >
          {categoryOptions()}
        </Select>
      </FormControl>

      <FormControl sx={{ marginBottom: 5 }}>
        <InputLabel color="primary">Status</InputLabel>
        <Select
          id="status"
          label="Status"
          name="status"
          size="medium"
          color="primary"
          aria-labelledby="status"
          required
          value={formik.values.status}
          onChange={formik.handleChange}
        >
          {statusOptions()}
        </Select>
      </FormControl>
      <FormControl sx={{ marginBottom: 5 }}>
        <Typography gutterBottom color="primary" fontSize="1.06rem">
          Priority
        </Typography>
        <RadioGroup
          row
          id="priority"
          aria-labelledby="priority"
          name="priority"
          value={formik.values.priority}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            formik?.setFieldValue("priority", e?.currentTarget.value)
          }
        >
          {prioritiesOptions()}
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ marginBottom: 5 }}>
        <Typography gutterBottom color="primary" fontSize="1.06rem">
          Progress
        </Typography>
        <Slider
          id="progress"
          name="progress"
          value={formik.values.progress}
          onChange={formik.handleChange}
          aria-labelledby="progress"
          valueLabelDisplay="auto"
          shiftStep={30}
          step={10}
          marks
          min={0}
          max={100}
        />
      </FormControl>
    </>
  );
};

const CreateTicketForm = WithFormikForm({
  WrapperComponent: CreateTicketFormik,
  formikOptions,
  buttonLabel: "Submit",
});

export default CreateTicketForm;
