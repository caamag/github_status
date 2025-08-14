import * as Css from "./style";
import { useState } from "react";
import { useData } from "../../hooks/useData";

//components
import { Button } from "../../components/UI/button";

const SearchPage = () => {
  const [name, setName] = useState<string>("");
  const { loading, fetchUserData } = useData();

  return (
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
            fetchUserData(name);
          }}
          disabled={loading}
        >
          {loading ? "..." : "Procurar"}
        </Button>
      </Css.UserSearch>
    </Css.Container>
  );
};

export default SearchPage;
