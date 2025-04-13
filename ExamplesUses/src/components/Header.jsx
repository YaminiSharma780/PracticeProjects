import { Link } from "react-router";
import { useMyTheme } from "../hooks/useMyTheme";

export default function Header() {
  const [mode, setMode] = useMyTheme();
  return (
    <div className="header">
      <Link to="/home">
        <h1>Header</h1>
      </Link>
      <Link to="/context">Context</Link>
      <Link to="/reducer">Reducer</Link>
      <button onClick={() => setMode(!mode)}>App Mode</button>
    </div>
  );
}
