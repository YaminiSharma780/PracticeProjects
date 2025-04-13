import { Link } from "react-router";
import pattern from "../assets/pattern.png";
export default function Header() {
  return (
    <header className="flex justify-between px-2 py-2 font-semibold shadow-sm shadow-zinc-600 hover:bg-zinc-200 md:px-4">
      <Link to="/">
        <img className="h-12 w-12" src={pattern} alt="eagle" />
      </Link>
      <ul className="flex items-center gap-8">
        <li>
          <Link to="/funCounter">FunCounter</Link>
        </li>
        <li>
          <Link to="/classCounter">ClassCounter</Link>
        </li>
        <li>
          <Link to="/clickCounter">ClickCounter</Link>
        </li>
        <li>
          <Link to="/hoverCounter">HoverCounter</Link>
        </li>
      </ul>
    </header>
  );
}
