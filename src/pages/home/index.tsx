import * as Css from "./style";

//components
import Header from "../../components/header";

const HomePage = () => {
  return (
    <Css.Container>
      <Header />
      <Css.Content>
        <Css.SectionData>
          <h2>Dados Da conta:</h2>
          <br />
          <Css.CardsContainer>
            <Css.Card></Css.Card>
            <Css.Card></Css.Card>
            <Css.Card></Css.Card>
            <Css.Card></Css.Card>
            <Css.Card></Css.Card>
          </Css.CardsContainer>
        </Css.SectionData>

        <Css.PieChart></Css.PieChart>
      </Css.Content>
    </Css.Container>
  );
};

export default HomePage;
