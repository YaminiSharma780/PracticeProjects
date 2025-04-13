import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'remixicon/fonts/remixicon.css';

import CartContent from "./CartContent";

import Header from "mdfdapp1/Header";
import Footer from "mdfdapp1/Footer";

const App = () => {
  return (
    <main className="w-full overflow-hidden">
      <Header app={{ name: "cart" }} />
      <CartContent />
      <Footer />
    </main>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
