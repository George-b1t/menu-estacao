import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from 'mongodb';
import { connectToDatabase } from "../../services/mongodb";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  if ( request.method === 'POST' ) {
    const { nome } = request.body;

    const db = await connectToDatabase();

    const collection = db.collection(process.env.MONGO_COLLECTION);

    const tipoExists = await collection.findOne({
      class: nome,
    });

    if ( tipoExists ) {
      return response.status(409).json({
        message: 'Tipo já existente!'
      });
    };

    const item = await collection.insertOne({
      class: nome,
      items: [
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
      class: nome,
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
        items: [
          ...tipoExists.items,
          {
            id: tipoExists.items.length + 1,
            description: tipoExists.items[0].description,
            name: tipoExists.items[0].name,
            valor: tipoExists.items[0].valor
          }
        ]
      }
    });

    return response.json(item);
  }
};
