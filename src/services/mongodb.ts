import { MongoClient, Db } from 'mongodb';

let cachedDb: Db = null;

export async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  };

  const client = await MongoClient.connect(process.env.MONGO_URL);

  const dbName = process.env.MONGO_DB;

  const db = client.db(dbName);

  cachedDb = db;

  return db;
};