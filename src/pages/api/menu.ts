import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../services/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const db = await connectToDatabase();

  const collection = db.collection(process.env.MONGO_COLLECTION);

  const itens = [];

  await collection.find().forEach(item => {
    itens.push(item);
  });

  return res.json(itens);
};
