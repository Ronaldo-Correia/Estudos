import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ListaTarefa from "./ListaTarefa";
import Contador from "./Contador";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contador" element={<Contador />} />
        <Route path="/ListaTarefa" element={<ListaTarefa />} />
      </Routes>
    </Router>
  );
}

export default App;
