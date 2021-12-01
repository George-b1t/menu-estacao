import { Container, Content } from "./styles";

export function Header() {
  return (
    <>
      <Container>
        <Content>
          <div className='field-image'>
            <img src="/logo-trem.svg" alt="logo" />
          </div>
          <div className='field-title'>
            <h1>ESTAÇÃO SHOPPERIA</h1>
            <div className='underline' />
          </div>
        </Content>
      </Container>
    </>
  );
};