import * as Css from "./style";
import { VscLoading } from "react-icons/vsc";

const Loader = () => {
  return (
    <Css.LoaderContainer>
      <p>
        <VscLoading />
      </p>
    </Css.LoaderContainer>
  );
};

export default Loader;
