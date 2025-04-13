import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import 'remixicon/fonts/remixicon.css';

import Header from "mdfdapp1/Header";
import Footer from "mdfdapp1/Footer";
import HomeContent from "./HomeContent";

const App = () => {
  return (
    <Router>
      <main>
        <Header app={{ name: "mdfdapp2" }} />
        <Routes>
          <Route path="/product/:id" Component={HomeContent} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
