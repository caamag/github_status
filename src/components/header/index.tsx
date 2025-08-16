import * as Css from "./style";
import { FaGithub } from "react-icons/fa";

import { useUser } from "../../context/UserContext";

const Header = () => {
  const { gitUser } = useUser();

  return (
    <Css.Header>
      <Css.UserContent>
        <FaGithub />
        <p>
          Olá, {gitUser?.login}!
          <br />
          {gitUser?.name} | {gitUser?.company}
        </p>
      </Css.UserContent>
    </Css.Header>
  );
};

export default Header;
