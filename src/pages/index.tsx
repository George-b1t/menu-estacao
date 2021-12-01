import { useContext, useEffect, useState } from 'react';
import Image from 'next/image'

import { AiOutlineSearch } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';

import { api } from '../services/api';

import 'react-toastify/dist/ReactToastify.css';

import { OrderContext } from '../context/OrderContext';
import { Header } from '../components/Header';
import { Container } from '../styles/styles';
import { MenuClass } from '../components/MenuClass';

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

export default function Home() {
  const [ menu, setMenu ] = useState<menuContent[]>([]);
  const [ viewingOrder, setViewingOrder ] = useState<boolean>(false);
  const [ searchedItem, setSearchedItem ] = useState<string>("");

  const { items, addItem, removeItem } = useContext(OrderContext);

  useEffect(() => {
    api.get('/menu')
      .then(res => {
        setMenu(res.data as menuContent[]);
      });
  }, []);

  return (
    <Container>
      <Header />
      {menu.map(itemClass => <MenuClass nome={itemClass.class} items={itemClass.items} />)}
    </Container>
  );
};
