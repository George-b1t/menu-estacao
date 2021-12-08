import { NextApiRequest, NextApiResponse } from "next";

import { MongoClient, Db, ObjectId } from 'mongodb';

let cachedDb: Db = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  };

  const client = await MongoClient.connect(process.env.MONGO_URL);

  const dbName = process.env.MONGO_DB;

  const db = client.db(dbName);

  cachedDb = db;

  return db;
};

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  if ( request.method === 'POST' ) {
    const { nome } = request.body;

    const db = await connectToDatabase();

    const collection = db.collection(process.env.MONGO_COLLECTION);

    const tipoExists = await collection.findOne({
      nome: nome,
    });

    if ( tipoExists ) {
      return response.status(409).json({
        message: 'Tipo já existente!'
      });
    };

    const item = await collection.insertOne({
      nome,
      itens: [
        {
          id: 1,
          name: 'Frango com queijo',
          description: '',
          valor: 10
        }
      ]
    });

    return response.json(item);
  } else if ( request.method === 'PUT' ) {
    const { nome } = request.body;

    const db = await connectToDatabase();

    const collection = db.collection(process.env.MONGO_COLLECTION);

    const tipoExists = await collection.findOne({
      nome: nome,
    });

    if ( !tipoExists ) {
      return response.status(400).json({
        message: 'Tipo não existente!'
      });
    };

    const item = await collection.updateOne({
      "_id": new ObjectId(tipoExists._id)
    }, {
      $set: {
        itens: [
          ...tipoExists.itens,
          {
            teste: 'OK',
            id: tipoExists.itens.length + 1
          }
        ]
      }
    });

    return response.json(item);
  }
};
