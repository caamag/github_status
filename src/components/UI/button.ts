import styled from "styled-components";
import { Colors } from "../../global/colors";

export const Button = styled.button`
  background-color: ${Colors.purple};
  border-radius: 8px;
  color: white;
  padding: 10px 40px;
  border: none;
  transition: 150ms;

  &:hover {
    padding: 10px 50px;
    background-color: rgba(62, 9, 112, 1);
  }
`;
