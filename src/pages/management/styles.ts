import styled from "styled-components";

export const Container = styled.div`
  background: #000;
  display: flex;
  flex-direction: column;
`;

export const FieldItems = styled.div`
  margin: 0 auto;
`;

export const ItemsHeader = styled.div`
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;

    color: #FFFFFF;

    margin: 20px 0 5px 0;
    padding-left: 21px;
  }

  div {
    width: 100%;
    height: 1px;
    background: #FFF;
  }
`;
