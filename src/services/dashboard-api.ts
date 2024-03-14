import { groupBy, populateTicketMetrics } from "@/utils/helper";
import { connectDbCollection } from "./connect-db";

export const retrieveDashboardDataForUser = async () => {
  const ticketCollection = await connectDbCollection("tickets");
  const result = await ticketCollection
    .find(
      {
        createdBy: "sshankariya@gmail.com",
      },
      { projection: { _id: 0 } }
    )
    .toArray();

  const ticketsGroupedByCategory = groupBy(result, "category");
  const metrics = populateTicketMetrics(result, ticketsGroupedByCategory);

  return {
    ticketsGroupedByCategory,
    metrics,
  };
};
