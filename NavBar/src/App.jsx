import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./components/Header";
import Home from "./components/Home";
// import Blog from "./components/Blog";
// const Blog = lazy(() => import("./components/Blog"));
const Blog = lazy(() => wait(1000).then(() => import("./components/Blog")));
// import Careers from "./components/Careers";
const Careers = lazy(() => import("./components/Careers"));
// import Contact from "./components/Contact";
const Contact = lazy(() => import("./components/Contact"));

const wait = (time) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, time),
  );
};

export default function App() {
  return (
    <main>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/blog"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Blog />
              </Suspense>
            }
          ></Route>
          <Route path="/careers" element={<Careers />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </main>
  );
}
