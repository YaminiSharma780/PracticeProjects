import { useState } from "react";
import ChildComponent from "./Child";

export default function MovingComponentPerformant({ children }) {
  const [state, setState] = useState({  x: 720, y: 260 });
  return (
    <div
      className="moving-div"
      onMouseMove={(e) => setState({ x: e.clientX - 20, y: e.clientY - 20 })}
      style={{ left: state.x, top: state.y }}
    >
      {children}
    </div>
  );
}
