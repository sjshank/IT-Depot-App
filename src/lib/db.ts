import { MongoClient } from "mongodb";

export const openDBConnection = async () => {
  if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing: "MONGODB_URI"');
  }
  const uri = process.env.MONGODB_URI;
  const options = {};

  let client;
  // let mongodbConnection: Promise<MongoClient>;

  // if (process.env.NODE_ENV === "development") {
  //   // In development mode, use a global variable so that the value
  //   // is preserved across module reloads caused by HMR (Hot Module Replacement).
  //   let globalWithMongo = global as typeof globalThis & {
  //     _mongoClientPromise?: Promise<MongoClient>;
  //   };

  //   if (!globalWithMongo._mongoClientPromise) {
  //     client = new MongoClient(uri, options);
  //     globalWithMongo._mongoClientPromise = client.connect();
  //   }
  //   mongodbConnection = globalWithMongo._mongoClientPromise;
  // } else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  // mongodbConnection = await client.connect();
  return await client.connect();
  // }
};

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
