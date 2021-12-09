import styled from 'styled-components';

export const Container = styled.div`
  width: 339px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 17px;

  h2 {
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;

    color: #D8942F;
  }

  button {
    width: 108px;
    height: 39px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 17px;

    background: #D8942F;
    border-radius: 2px;
    border: none;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #000000;

    svg {
      margin-bottom: 1px;
    }
  }
`;
