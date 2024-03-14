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
  const { formik } = props;
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
        <MuiInputLabel>
          Category <sup>*</sup>
        </MuiInputLabel>
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
        <MuiInputLabel>
          Status <sup>*</sup>
        </MuiInputLabel>
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
          Priority <sup>*</sup>
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
          Progress (%)
        </Typography>
        <Slider
          id="progress"
          name="progress"
          value={toggleProgress}
          onChange={formik.handleChange}
          aria-labelledby="progress"
          valueLabelDisplay="auto"
          shiftStep={30}
          step={10}
          marks
          min={0}
          max={100}
          disabled={formik.values.status === "not started"}
        />
      </FormControl>
    </>
  );
};

export default ConnectedForm;
