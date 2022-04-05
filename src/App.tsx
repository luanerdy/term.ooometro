import { Main } from "./pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { GlobalStyle } from "./styles/GlobalStyles";
import { WordsProvider } from "./contexts/wordsProvider";

const App = () => {
  return (
    <Router>
      <WordsProvider>
        <GlobalStyle />
        <Routes>
          <Route index element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </WordsProvider>
    </Router>
  );
};

export { App };
