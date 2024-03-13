import CreateTicket from "@/components/create-ticket";
import WithPageLayout from "@/hoc/withPageLayout";
import { NextPageWithLayout } from "@/layout";

export interface ICreateTicketFields {
  title: string;
  priority: number;
  description: string;
  category: string;
  status: string;
  progress: number;
}

const CreateTicketPage: NextPageWithLayout = () => {
  return <CreateTicket />;
};

export default WithPageLayout(CreateTicketPage);
