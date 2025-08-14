import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useUser } from "./context/UserContext";

//pages
import SearchPage from "./pages/search";
import HomePage from "./pages/home";

const Router = () => {
  const { gitUser } = useUser();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={gitUser ? <HomePage /> : <SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
