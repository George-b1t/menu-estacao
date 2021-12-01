import { MenuItem } from "../MenuItem";
import { Container } from "./styles";

interface menuItemProps {
  id: number;
  name: string;
  description: string;
  valor: number;
};

export function MenuClass({ nome, items }: { nome: string; items: menuItemProps[] }) {
  return (
    <Container>
      <div className='field-title'>
        <h3>{nome}</h3>
        <div className='separator' />
      </div>
      <div className='field-items'>
        {
          items.map(item => {
            return (
              <MenuItem item={item} />
            )
          })
        }
      </div>
    </Container>
  );
};