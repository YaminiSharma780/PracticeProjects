import { useState } from "react";

export default function MovingComponent({ children }) {
  const [state, setState] = useState({ x: 120, y: 260 });
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
