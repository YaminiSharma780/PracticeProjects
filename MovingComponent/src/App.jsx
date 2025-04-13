import "./App.css";
import MovingComponent from "./components/MovingComponent";
import ChildComponent from "./components/Child";
import MovingComponentNonPerformant from "./components/MovingComponentNonPerformant";
import MovingComponentPerformant from "./components/MovingComponentPerformant";
import { memo } from "react";
import Home from "./components/ListDisplay/Home";

const MovingComponentMemoised = memo(MovingComponent);
const ChildComponentMemoised = memo(ChildComponent);

export default function App() {
  const child = <ChildComponentMemoised />;
  return (
    <main>
      {/* <div className="container">
        <div className="column">
          <MovingComponent>
            <ChildComponent />
          </MovingComponent>
        </div>
        <div className="column">
          <MovingComponentNonPerformant />
        </div>
        <div className="column">
          <MovingComponentPerformant>
            {() => <ChildComponent />}
          </MovingComponentPerformant>
        </div>

        <div className="column">
          <MovingComponent>
            <ChildComponentMemoised />
          </MovingComponent>
        </div>

        <div className="column">
          <MovingComponent>{child}</MovingComponent>
        </div>
      </div> */}

      <div className="playground">
        <Home />
      </div>
    </main>
  );
}
