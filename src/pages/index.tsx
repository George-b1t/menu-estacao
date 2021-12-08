import { useEffect, useState } from 'react';

import { api } from '../services/api';

import 'react-toastify/dist/ReactToastify.css';

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
  const [ tipo, setTipo ] = useState<string>("");

  useEffect(() => {
    api.get('/menu')
      .then(res => {
        setMenu(res.data as menuContent[]);
      });
  }, []);

  function atualiza() {
    api.put('/tipos', {
      nome: tipo
    });
  }

  function cria() {
    api.post('/tipos', {
      nome: tipo
    });
  }

  return (
    <Container>
      <Header />
      {menu.map(itemClass => <MenuClass nome={itemClass.class} items={itemClass.items} />)}
      <input type="text" value={tipo} onChange={e => setTipo(e.target.value)} />
      <button onClick={cria}>
        Cria
      </button>
      <button onClick={atualiza}>
        Atualiza
      </button>
    </Container>
  );
};
