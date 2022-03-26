import { Main } from "./pages/Main";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotFound } from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={ <Main /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </Router>
  )
}

export { App };
