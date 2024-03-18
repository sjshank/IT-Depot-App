import React from "react";
import dynamic from "next/dynamic";
import {
  Alert,
  AlertProps,
  ListItemText,
  Slide,
  SlideProps,
  styled,
} from "@mui/material";
import { TNotification } from "@/types/ticket";

const SlideTransition = (props: SlideProps) => {
  return <Slide {...props} direction="left" />;
};

const CustomizeAlert = styled(Alert)<AlertProps>(({ theme }) => ({
  "&.MuiAlert-root ": {
    "& .MuiAlert-message": { padding: 0 },
  },
}));

const MuiToast = (props: any) => {
  const { type, messages } = props as TNotification;
  let SnackBarComponent = null;
  let messageContent = messages.map((msg: string, index: number) => {
    return <ListItemText key={msg + index} primary={msg} />;
  });
  if (messages.length > 0) {
    SnackBarComponent = dynamic(() => import("@mui/material/Snackbar"), {
      ssr: false,
    });
  }

  return (
    <>
      {messages.length > 0 && SnackBarComponent && (
        <SnackBarComponent
          TransitionComponent={SlideTransition}
          open={messages.length > 0}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <CustomizeAlert severity={type} variant="filled">
            {messageContent}
          </CustomizeAlert>
        </SnackBarComponent>
      )}
    </>
  );
};

export default MuiToast;
