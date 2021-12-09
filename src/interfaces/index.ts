export type item = {
  id: number;
  name: string;
  description: string;
  valor: number;
};

export type menuContent = {
  class: string;
  items: item[];
};