import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  div.field-title {
    width: 100%;
    padding: 0 5px;
    max-width: 350px;

    h3 {
      font-weight: 400;
      font-size: 20px;
      color: #FFF;
      padding-left: 20px;
      margin-bottom: 5px;
    }

    div.separator {
      width: 100%;
      height: 2px;
      background: #FFF;
    }
  }

  div.field-items {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 350px;
  }
`;