import CreateTicket from "@/components/create-ticket";
import WithPageLayout from "@/hoc/withPageLayout";
import { NextPageWithLayout } from "@/layout";

const CreateTicketPage: NextPageWithLayout = () => {
  return <CreateTicket />;
};

export default WithPageLayout(CreateTicketPage);
