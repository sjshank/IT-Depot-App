import UpdateTicketContainer from "@/components/update-ticket";
import WithPageLayout from "@/hoc/withPageLayout";
import { NextPageWithLayout } from "@/layout";
import type { GetServerSideProps } from "next";
import { retrieveDetailsForTicketId } from "@/services/ticket-api";

const UpdateTicketDetailsPage: NextPageWithLayout = (
  props: any
): JSX.Element => {
  const { ticket } = props;
  return <UpdateTicketContainer {...ticket} />;
};

export const getServerSideProps: GetServerSideProps<any> = async (context) => {
  const { params } = context;
  const result = await retrieveDetailsForTicketId(params?.ticketId as string);
  return {
    props: {
      ticket: { ...result },
    },
  };
};

export default WithPageLayout(UpdateTicketDetailsPage);
