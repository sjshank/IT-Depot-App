import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { unEscapeCharEntities } from "@/utils/helper";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

type TModalProps = {
  handleClose: () => void;
  open: boolean;
  modalId: string;
  modalTitle: string | undefined;
  modalContent: JSX.Element;
  footer?: JSX.Element;
};

const MuiDialog = ({
  footer,
  handleClose,
  modalContent = <></>,
  modalId,
  modalTitle = "Modal Title",
  open,
}: TModalProps) => {
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby={modalId}
      open={open}
      fullWidth
      TransitionComponent={Transition}
    >
      <DialogTitle
        sx={{ m: 0, p: 2, textTransform: "capitalize" }}
        id={modalId}
        textAlign="center"
        color="primary"
      >
        {unEscapeCharEntities(modalTitle)}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent
        dividers
        sx={{
          borderTop: "2px solid rgba(0, 0, 0, 0.25)",
          borderBottom: "2px solid rgba(0, 0, 0, 0.25)",
        }}
      >
        {modalContent}
      </DialogContent>
      <DialogActions>{footer}</DialogActions>
    </Dialog>
  );
};

export default MuiDialog;
