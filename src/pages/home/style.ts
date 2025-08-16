import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-width: 1600px;
  margin: 0 auto;
  height: 100vh;
`;

export const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  height: calc(100% - 80px);

  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const SectionData = styled.div`
  height: 200px;
  padding: 30px;
  background-color: rgb(17, 24, 40);
  border-radius: 10px;

  h2 {
    font-weight: 200;
    color: white;
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
`;

export const Card = styled.div`
  width: 150px;
  height: 150px;
  background-color: rgb(25, 32, 51);
  border-radius: 10px;
`;

export const PieChart = styled.div`
  width: 30%;
  min-width: 400px;
  height: 200px;
  padding: 30px;

  background-color: rgb(17, 24, 40);
  border-radius: 10px;
`;
