import React from "react";
import NextLink from "next/link";
import Link from "@mui/material/Link";

type TCardActionProps = {
  id: string;
  status: string;
  onViewTicketModal: () => void;
};

const TicketCardActions: React.FunctionComponent<TCardActionProps> = ({
  id,
  status,
  onViewTicketModal,
}: TCardActionProps): JSX.Element => {
  return (
    <>
      <Link
        component="a"
        role="button"
        color="primary"
        padding={1}
        onClick={onViewTicketModal}
        sx={{ cursor: "pointer" }}
      >
        View
      </Link>
      {status !== "done" && (
        <Link
          href={`/ticket/update/${id}`}
          component={NextLink}
          role="link"
          color="secondary"
          padding={1}
        >
          Update
        </Link>
      )}
    </>
  );
};

export default TicketCardActions;
