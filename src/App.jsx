import { Routes, Route } from "react-router-dom";
import "./App.css";
import Languages from "./components/Languages";
import Language from "./components/Language";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Languages />} />
      <Route path="/:code" element={<Language />} />
    </Routes>
  );
}

export default App;
