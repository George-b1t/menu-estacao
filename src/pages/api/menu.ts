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
          valor: 10
        },
        {
          id: 5,
          name: 'Frango com queijo',
          description: '',
          valor: 10
        },
        {
          id: 6,
          name: 'Frango com queijo',
          description: '',
          valor: 10
        }
      ]
    },
    {
      class: 'HAMBURGUERS',
      items: [
        {
          id: 7,
          name: 'X-Bacon',
          description: 'PAO, HAMBURGUER, QUEIJO, BACON, SALADA, FRANGO E PRESUNTO.',
          valor: 14.2
        },
        {
          id: 8,
          name: 'X-Bacon',
          description: 'PAO, HAMBURGUER, QUEIJO, BACON, SALADA, FRANGO E PRESUNTO.',
          valor: 14.2
        },
        {
          id: 9,
          name: 'X-Bacon',
          description: 'PAO, HAMBURGUER, QUEIJO, BACON, SALADA, FRANGO E PRESUNTO.',
          valor: 14.2
        }
      ]
    },
    {
      class: 'SUCOS',
      items: [
        {
          id: 10,
          name: 'Limao',
          description: '',
          valor: 3
        },
        {
          id: 11,
          name: 'Jarra Limao',
          description: '',
          valor: 10
        },
        {
          id: 12,
          name: 'Jarra Laranja',
          description: '',
          valor: 7
        }
      ]
    }
  ]

  res.status(200).json(data);
};
