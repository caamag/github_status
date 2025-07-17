import { GlobalStyle } from "./global/styles";
import * as Css from "./style";
import { Button } from "./components/UI/button";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Css.Container>
        <Css.UserSearch>
          <h1>Bem-vindo!</h1>
          <p>Informe o seu nome de usuário do Github para começar.</p>
          <input type="text" />
          <Button>Procurar</Button>
        </Css.UserSearch>
      </Css.Container>
    </>
  );
};

export default App;
