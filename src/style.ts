import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserSearch = styled.div`
  width: 100%;
  max-width: 500px;
  height: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: white;
    text-align: center;
    letter-spacing: 3px;
  }

  p {
    text-align: center;
    color: white;
    font-size: 22px;
    margin-bottom: 30px;
  }

  input {
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    background-color: white;
    outline: none;
    font-size: 20px;
    margin-bottom: 30px;
  }
`;
