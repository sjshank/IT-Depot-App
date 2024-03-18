import { TextField, TextFieldProps } from "@mui/material";
import React from "react";

const MuiTextField = (textFieldProps: TextFieldProps) => {
  return (
    <TextField
      id={textFieldProps.id}
      label={textFieldProps.label}
      name={textFieldProps.name}
      size={textFieldProps.size}
      placeholder={textFieldProps.placeholder}
      value={textFieldProps.value}
      onChange={textFieldProps.onChange}
      onBlur={textFieldProps.onBlur}
      error={textFieldProps.error}
      helperText={textFieldProps.helperText}
      InputProps={textFieldProps.InputProps}
      variant="standard"
      sx={textFieldProps.sx}
    />
  );
};

export default MuiTextField;
