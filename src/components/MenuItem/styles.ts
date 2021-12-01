import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  padding: 15px 0 0 0;

  div.separator {
    width: 95%;
    height: 1px;
    margin: 0 auto;

    background: linear-gradient(90deg, #D8942F 42.05%, rgba(216, 148, 47, 0) 73.31%);

    margin-top: 15px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  div.field-top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-weight: 600;
      font-size: 16px;
      color: var(--orange);
    }

    button {
      background: var(--green);
      outline: none;
      border: none;
      border-radius: 2px;
      height: 20px;

      font-size: 14px;
      color: #FFF;
    }
  }

  p.description {
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;

    margin-top: 10px;

    color: var(--gray);
  }
`;
