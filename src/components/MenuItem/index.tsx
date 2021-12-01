import { Container, Content } from "./styles";

interface menuItemProps {
  id: number;
  name: string;
  description: string;
  valor: number;
};

export function MenuItem({ item }: {item: menuItemProps}) {
  return (
    <Container>
      <Content>
        <div className='field-top'>
          <h2>{item.name}</h2>
          <button>+ {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(item.valor)}</button>
        </div>
        {item.description && <p className='description'>{item.description}</p>}
      </Content>
      <div className='separator' />
    </Container>
  );
};
