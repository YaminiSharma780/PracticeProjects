interface HeaderProps {
  name: string;
}

const Header = ({ app }: { app: HeaderProps }) => {
  if (!app) {
    return (
      <header className="header">
        <div className="heading">Something went really wrong</div>
      </header>
    );
  }
  return (
    <header className="header">
      <div className="heading">{app.name}</div>
      <div className="contents">
        <ul className="contents-list">
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
          <li>Signup</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
