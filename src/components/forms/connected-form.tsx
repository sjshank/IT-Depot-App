import React, { useCallback, useMemo } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { CATEGORIES, PRIORITIES, STATUS } from "@/utils/constants";
import MuiInputLabel from "@/ui/MuiInputLabel";

const ConnectedForm: React.FunctionComponent<any> = (props: any) => {
  const { formik, createMode } = props;
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

  const toggleProgress = useMemo((): number => {
    return Number(
      formik.values.status === "not started"
        ? 0
        : formik.values.status === "done"
        ? 100
        : formik.values.progress
    );
  }, [formik.values.status, formik.values.progress]);

  return (
    <>
      <TextField
        id="title"
        name="title"
        size="medium"
        label="Title"
        required
        tabIndex={0}
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
        tabIndex={0}
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
        <MuiInputLabel id="ticket-category">
          Category <sup>*</sup>
        </MuiInputLabel>
        <Select
          id="category"
          labelId="ticket-category"
          label="Category"
          name="category"
          size="medium"
          required
          tabIndex={0}
          color="primary"
          value={formik.values.category}
          onChange={formik.handleChange}
        >
          {categoryOptions()}
        </Select>
      </FormControl>

      <FormControl sx={{ marginBottom: 5 }}>
        <MuiInputLabel id="ticket-status">
          Status <sup>*</sup>
        </MuiInputLabel>
        <Select
          id="status"
          label="Status"
          labelId="ticket-status"
          name="status"
          size="medium"
          color="primary"
          aria-labelledby="status"
          required
          tabIndex={0}
          disabled={createMode}
          value={formik.values.status}
          onChange={formik.handleChange}
        >
          {statusOptions()}
        </Select>
      </FormControl>
      <FormControl sx={{ marginBottom: 5 }}>
        <Typography
          gutterBottom
          color="primary"
          id="priority"
          fontSize="1.06rem"
        >
          Priority <sup>*</sup>
        </Typography>
        <RadioGroup
          row
          aria-labelledby="priority"
          name="priority"
          tabIndex={0}
          value={formik.values.priority}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            formik?.setFieldValue("priority", e?.currentTarget.value)
          }
        >
          {prioritiesOptions()}
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ marginBottom: 5 }}>
        <Typography
          gutterBottom
          color="primary"
          id="progress"
          fontSize="1.06rem"
        >
          Progress (%)
        </Typography>
        <Slider
          name="progress"
          value={toggleProgress}
          onChange={formik.handleChange}
          aria-labelledby="progress"
          valueLabelDisplay="auto"
          tabIndex={0}
          shiftStep={30}
          step={10}
          marks
          min={0}
          max={100}
          disabled={formik.values.status === "not started"}
        />
      </FormControl>
      <TextField
        id="assignedTo"
        name="assignedTo"
        size="medium"
        label="Assigned To"
        required
        tabIndex={0}
        color="primary"
        disabled={true}
        placeholder="Enter email address"
        value={formik.values.assignedTo}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.assignedTo && Boolean(formik.errors.assignedTo)}
        helperText={formik.touched.assignedTo && formik.errors.assignedTo}
        variant="standard"
        sx={{ marginBottom: 3, minHeight: "80px" }}
      />
    </>
  );
};

export default ConnectedForm;
