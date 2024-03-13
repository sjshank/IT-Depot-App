import UpdateTicket from "@/components/update-ticket";
import WithPageLayout from "@/hoc/withPageLayout";
import { NextPageWithLayout } from "@/layout";
import { NextRouter, useRouter } from "next/router";

const UpdateTicketDetailsPage: NextPageWithLayout = (): JSX.Element => {
  const router: NextRouter = useRouter();
  console.log(router.query);
  return <UpdateTicket />;
};

export default WithPageLayout(UpdateTicketDetailsPage);
