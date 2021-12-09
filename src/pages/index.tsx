import { useEffect, useState } from 'react';

import { api } from '../services/api';

import 'react-toastify/dist/ReactToastify.css';

import { Header } from '../components/Header';
import { Container } from '../styles/styles';
import { MenuClass } from '../components/MenuClass';
import { menuContent } from '../interfaces';

export default function Home() {
  const [ menu, setMenu ] = useState<menuContent[]>([]);

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
