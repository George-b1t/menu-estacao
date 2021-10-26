import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type item = {
  id: number;
  name: string;
  description: string;
  valor: number;
};

interface OrderContextData {
  items: item[];
  addItem: (item: item) => void;
  removeItem: (id: number) => void;
};

interface OrderProviderProps {
  children: ReactNode;
};

export const OrderContext = createContext({} as OrderContextData);

export function OrderProvider({
  children,
}: OrderProviderProps) {
  const [ items, setItems ] = useState<item[]>([]);

  function addItem(item: item) {
    setItems(oldValue => [item, ...oldValue]);
  };

  function removeItem(id: number) {
    setItems(items=>items.filter(item=>item.id!==id));
  };

  return (
    <OrderContext.Provider value={{
      items,
      addItem,
      removeItem
    }}>
      { children }
    </OrderContext.Provider>
  );
};
