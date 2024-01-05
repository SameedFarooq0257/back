import { MongoClient } from "mongodb";

let client;
let db;

export const connectToDatabase = async () => {
  if (!client) {
    client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    if (!client.isConnected()) await client.connect();
    db = client.db(process.env.DB_NAME);
  }

  return db;
};
