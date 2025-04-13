import { useMyTheme } from "../hooks/useMyTheme";

export default function Home() {
  const [mode] = useMyTheme();
  return (
    <div className={`main-container ${mode ? "dark" : ""}`}>
      <div>
        <h1>Home Page</h1>
      </div>
    </div>
  );
}
