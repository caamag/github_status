import { GlobalStyle } from "./global/styles";
import * as Css from "./style";
import { Button } from "./components/UI/button";
import { useUser } from "./context/UserContext";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState<string>("");
  const { saveUserName } = useUser();

  return (
    <>
      <GlobalStyle />
      <Css.Container>
        <Css.UserSearch>
          <h1>Bem-vindo!</h1>
          <p>Informe o seu nome de usuário do Github para começar.</p>
          <input
            type="text"
            placeholder="Name:"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Button
            onClick={() => {
              saveUserName(name);
              setName("");
            }}
          >
            Procurar
          </Button>
        </Css.UserSearch>
      </Css.Container>
    </>
  );
};

export default App;
