import CreateTicketContainer from "@/components/create-ticket";
import WithPageLayout from "@/hoc/withPageLayout";
import { NextPageWithLayout } from "@/layout";

const CreateTicketPage: NextPageWithLayout = () => {
  return <CreateTicketContainer />;
};

export default WithPageLayout(CreateTicketPage);
