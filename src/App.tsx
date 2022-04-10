import { Main } from "./pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { GlobalStyle } from "./styles/GlobalStyles";

const App = () => {
  return (
    <Router>
        <GlobalStyle />
        <Routes>
          <Route index element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  );
};

export { App };
