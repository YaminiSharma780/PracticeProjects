import "./App.css";
import InfiniteScroll from "../src/components/InfiniteScroll";
import SideBar from "./components/SideBar";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);
  return (
    <div id="outer-container">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap">
        <button onClick={() => setModal(true)}>Open Modal</button>
        {modal && <Modal modal={modal} setModal={setModal} />}
        <InfiniteScroll />
      </div>
    </div>
  );
}

export default App;
