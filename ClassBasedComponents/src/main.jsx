import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import FunCounter from "./components/FunCounter.jsx";
import Home from "./components/Home.jsx";
import ClassCounter from "./components/ClassCounter.jsx";
import ClickCounter from "./components/ClickCounter.jsx";
import HoverCounter from "./components/HoverCounter.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/funCounter" element={<FunCounter />}></Route>
        <Route path="/classCounter" element={<ClassCounter />}></Route>
        <Route path="/clickCounter" element={<ClickCounter />}></Route>
        <Route path="/hoverCounter" element={<HoverCounter />}></Route>
      </Route>
    </Routes>
  </Router>
);
