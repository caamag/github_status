import styled from "styled-components";

export const Header = styled.header`
  width: 90%;
  margin: 0 auto;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserContent = styled.div`
  display: flex;
  align-items: center;

  color: white;
  font-weight: 200;
  letter-spacing: 0.5px;

  svg {
    width: 35px;
    height: auto;
    margin-right: 10px;
  }
`;
