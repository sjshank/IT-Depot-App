import UpdateTicketContainer from "@/components/update-ticket";
import WithPageLayout from "@/hoc/withPageLayout";
import { NextPageWithLayout } from "@/layout";
import type { GetServerSideProps } from "next";
import { retrieveDetailsForTicketId } from "@/services/ticket-api";
import Head from "next/head";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const UpdateTicketDetailsPage: NextPageWithLayout = (
  props: any
): JSX.Element => {
  const { ticket } = props;
  return (
    <>
      <Head>
        <title>IT Garage : Update Incident Details</title>
        <meta
          name="description"
          content="User can update an existing incident ticket details"
        />
      </Head>
      <UpdateTicketContainer {...ticket} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<any> = async (context) => {
  const { params, req, res } = context;
  const session = await getServerSession(req, res, authOptions as any);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const result = await retrieveDetailsForTicketId(params?.ticketId as string);
  return {
    props: {
      ticket: { ...result },
    },
  };
};

export default WithPageLayout(UpdateTicketDetailsPage);
