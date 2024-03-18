import { connectDbCollection } from "./connect-db";

export const retrieveDetailsForTicketId = async (ticketId: string) => {
  const { connection, dbCollection: ticketCollection } =
    await connectDbCollection("tickets");
  const result = await ticketCollection.findOne(
    {
      ticketId: ticketId,
    },
    { projection: { _id: 0 } }
  );
  connection.close();
  return {
    ...result,
  };
};
