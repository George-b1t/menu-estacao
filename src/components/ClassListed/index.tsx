import { Container } from "./styles";

import { FaPencilAlt } from 'react-icons/fa';

export function ClassListed({ name }: { name: string }) {
  return (
    <>
      <Container>
        <h2>{name}</h2>
        <button>
          Editar
          <FaPencilAlt />
        </button>
      </Container>
    </>
  );
};