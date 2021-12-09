import { useEffect, useState } from 'react';

import 'react-toastify/dist/ReactToastify.css';

import { Header } from '../../components/Header';
import { Container } from '../../styles/styles';

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

export default function Tipos() {
  const [ menu, setMenu ] = useState<menuContent[]>([]);
  const [ tipo, setTipo ] = useState<string>("");

  useEffect(() => {
    
  }, []);

  return (
    <Container>
      <Header />
    </Container>
  );
};
