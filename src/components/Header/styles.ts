import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0 13px 0;
`;

export const Content = styled.div`
  display: flex;

  div.field-image {
    background: var(--orange);
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px 2px 0px 2px;

    img {
      margin-top: 7px;
    }
  }

  div.field-title {
    display: flex;
    flex-direction: column;
    position: relative;

    h1 {
      font-weight: 500;
      font-size: 20px;
      margin: 6px 0 0 8px;

      color: var(--orange);
    }

    div.underline {
      width: 240px;
      height: 4px;
      position: absolute;
      bottom: 0;

      background: var(--orange);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 0 1px 1px 0;
    }
  }
`;
