import { connectDbCollection } from "./connect-db";

export const retrieveDetailsForTicketId = async (ticketId: string) => {
  const ticketCollection = await connectDbCollection("tickets");
  const result = await ticketCollection.findOne(
    {
      ticketId: ticketId,
    },
    { projection: { _id: 0 } }
  );

  return {
    ...result,
  };
};
