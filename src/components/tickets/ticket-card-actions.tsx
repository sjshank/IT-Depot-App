import React from "react";
import NextLink from "next/link";
import Link from "@mui/material/Link";

const TicketCardActions: React.FunctionComponent<{
  id: string;
  status: string;
  onViewTicketModal: () => void;
}> = ({
  id,
  status,
  onViewTicketModal,
}: {
  id: string;
  status: string;
  onViewTicketModal: () => void;
}): JSX.Element => {
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
          role="navigation"
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
