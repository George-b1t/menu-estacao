import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import { ClassListed } from '../../components/ClassListed';
import { Header } from '../../components/Header';

import { menuContent } from '../../interfaces';
import { api } from '../../services/api';

import { Container, FieldItems, ItemsHeader } from './styles';

export default function Tipos() {
  const [ menu, setMenu ] = useState<menuContent[]>([]);
  const [ tipo, setTipo ] = useState<string>("");

  useEffect(() => {
    api.get('/menu')
      .then(res => {
        setMenu(res.data as menuContent[]);
      });
  }, []);

  return (
    <Container>
      <Header />
      <ItemsHeader>
        <h1>Tipos</h1>
        <div />
      </ItemsHeader>
      <FieldItems>
        {
          menu.map(item => {
            return (
              <ClassListed name={item.class}/>
            )
          })
        }
      </FieldItems>
    </Container>
  );
};
