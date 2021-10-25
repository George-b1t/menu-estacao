import { NextApiRequest, NextApiResponse } from "next";

type item = {
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
          name: 'Heineken 350 ml',
          description: '',
          valor: 8.50
        },
        {
          name: 'Heineken 350 ml',
          description: '',
          valor: 8.50
        },
        {
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
          name: 'Frango com queijo',
          description: '',
          valor: 8.50
        },
        {
          name: 'Frango com queijo',
          description: '',
          valor: 8.50
        },
        {
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
          name: 'X-Bacon',
          description: '2 carnes, queijo, bacon, salada, frango e presunto.',
          valor: 8.50
        },
        {
          name: 'X-Bacon',
          description: '2 carnes, queijo, bacon, salada, frango e presunto.',
          valor: 8.50
        },
        {
          name: 'X-Bacon',
          description: '2 carnes, queijo, bacon, salada, frango e presunto.',
          valor: 8.50
        }
      ]
    }
  ]

  res.status(200).json(data);
};
