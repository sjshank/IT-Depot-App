import mongodbConnection from "@/lib/db";
import { Collection, Document } from "mongodb";

export const connectDbCollection = async (
  collectionName: string
): Promise<Collection<Document>> => {
  const connection = await mongodbConnection;
  const db = await connection.db(process.env.MONGODB_NAME);
  const dbCollection = await db.collection(collectionName);
  return dbCollection;
};
