import { openDBConnection } from "@/lib/db";
import { Collection, Document, MongoClient } from "mongodb";

type TConnectDbCollection = {
  connection: MongoClient;
  dbCollection: Collection<Document>;
};

export const connectDbCollection = async (
  collectionName: string
): Promise<TConnectDbCollection> => {
  const connection = await openDBConnection();
  const db = await connection.db(process.env.MONGODB_NAME);
  const dbCollection = await db.collection(collectionName);
  return { connection, dbCollection };
};
