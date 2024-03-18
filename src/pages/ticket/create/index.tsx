import CreateTicketContainer from "@/components/create-ticket";
import WithPageLayout from "@/hoc/withPageLayout";
import { NextPageWithLayout } from "@/layout";
import Head from "next/head";

const CreateTicketPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>IT Garage : Report Incident</title>
        <meta
          name="description"
          content="User can report a new incident ticket"
        />
      </Head>
      <CreateTicketContainer />
    </>
  );
};

export default WithPageLayout(CreateTicketPage);
