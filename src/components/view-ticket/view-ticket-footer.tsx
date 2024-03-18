import React from "react";
import Button from "@mui/material/Button";

const ViewTicketFooter = (props: any) => {
  const { onClose, onDelete } = props;
  return (
    <>
      <Button onClick={onDelete} variant="contained" color="error" tabIndex={0}>
        Delete
      </Button>
      <Button
        onClick={onClose}
        variant="outlined"
        color="secondary"
        tabIndex={0}
      >
        Close
      </Button>
    </>
  );
};

export default ViewTicketFooter;
