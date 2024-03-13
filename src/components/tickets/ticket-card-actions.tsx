import React from "react";
import NextLink from "next/link";
import Link from "@mui/material/Link";

const TicketCardActions: React.FunctionComponent<{ id: string }> = ({
  id,
}: {
  id: string;
}): JSX.Element => {
  return (
    <>
      <Link
        href={`/ticket/${id}`}
        component={NextLink}
        role="navigation"
        color="primary"
        padding={1}
      >
        View
      </Link>
      <Link
        href={`/ticket/update/${id}`}
        component={NextLink}
        role="navigation"
        color="secondary"
        padding={1}
      >
        Update
      </Link>
    </>
  );
};

export default TicketCardActions;
