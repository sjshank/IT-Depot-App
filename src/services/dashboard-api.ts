import { groupBy, populateTicketMetrics } from "@/utils/helper";
import { connectDbCollection } from "./connect-db";

export const retrieveDashboardDataForUser = async (user: any) => {
  const { connection, dbCollection: ticketCollection } =
    await connectDbCollection("tickets");
  const result = await ticketCollection
    .find(
      {
        createdBy: user?.email,
      },
      { projection: { _id: 0 } }
    )
    .toArray();

  const ticketsGroupedByCategory = groupBy(result, "category");
  const metrics = populateTicketMetrics(result, ticketsGroupedByCategory);
  connection.close();
  return {
    ticketsGroupedByCategory,
    metrics,
  };
};
