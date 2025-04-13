import ReactDOM from "react-dom/client";
import 'remixicon/fonts/remixicon.css';
import "./index.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";

const App = () => (
  <>
    <Header app={{ name: "mdfdapp1" }} />
    <Home />
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
