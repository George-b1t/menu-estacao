import { NextApiRequest, NextApiResponse } from "next";

type item = {
  id: number;
  name: string;
  description: string;
  valor: number;
};

type menuContent = {
  class: string;
  items: item[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data: menuContent[] = [
    {
      class: 'BEBIDAS',
      items: [
        {
          id: 1,
          name: 'Heineken 350 ml',
          description: '',
          valor: 8.50
        },
        {
          id: 2,
          name: 'Heineken 350 ml',
          description: '',
          valor: 8.50
        },
        {
          id: 3,
          name: 'Heineken 350 ml',
          description: '',
          valor: 8.50
        }
      ]
    },
    {
      class: 'PASTÉIS',
      items: [
        {
          id: 4,
          name: 'Frango com queijo',
          description: '',
          valor: 8.50
        },
        {
          id: 5,
          name: 'Frango com queijo',
          description: '',
          valor: 8.50
        },
        {
          id: 6,
          name: 'Frango com queijo',
          description: '',
          valor: 8.50
        }
      ]
    },
    {
      class: 'HAMBURGUERS',
      items: [
        {
          id: 7,
          name: 'X-Bacon',
          description: '2 carnes, queijo, bacon, salada, frango e presunto.',
          valor: 8.50
        },
        {
          id: 8,
          name: 'X-Bacon',
          description: '2 carnes, queijo, bacon, salada, frango e presunto.',
          valor: 8.50
        },
        {
          id: 9,
          name: 'X-Bacon',
          description: '2 carnes, queijo, bacon, salada, frango e presunto.',
          valor: 8.50
        }
      ]
    }
  ]

  res.status(200).json(data);
};
