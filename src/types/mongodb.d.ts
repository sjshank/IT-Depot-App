import { MongoClient } from "mongodb";

//declare global variable for mongoclient to hold mongo connection only in dev
declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}
