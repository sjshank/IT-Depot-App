import React from "react";
import Button from "@mui/material/Button";

const ViewTicketFooter = (props: any) => {
  const { onClose, onDelete } = props;
  return (
    <>
      <Button onClick={onDelete} variant="contained" color="error" tabIndex={1}>
        Delete
      </Button>
      <Button
        onClick={onClose}
        variant="outlined"
        color="secondary"
        tabIndex={1}
      >
        Close
      </Button>
    </>
  );
};

export default ViewTicketFooter;
