import { useMyTheme } from "../hooks/useMyTheme";

export default function UseContext() {
  const [mode] = useMyTheme();
  return (
    <div className={`main-container ${mode ? "dark" : ""}`}>
      <div className="context-container">
        <h1>useContext()</h1>
        <div></div>
      </div>
    </div>
  );
}
