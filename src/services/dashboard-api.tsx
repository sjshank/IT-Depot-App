import mongodbConnection from "@/lib/db";
import { groupBy, populateTicketMetrics } from "@/utils/helper";

export const retrieveDashboardDataForUser = async () => {
  const connection = await mongodbConnection;
  const db = await connection.db(process.env.MONGODB_NAME);
  const ticketCollection = await db.collection("tickets");
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
