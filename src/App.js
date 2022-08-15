import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Zuri from "./pages/Zuri";
import Zuritalent from "./pages/Zuritalent";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Zuri" element={<Zuri />} />
        <Route path="/Zuritalent" element={<Zuritalent />} />
      </Routes>
    </div>
  );
}
export default App;
