import { Link, NavLink } from "react-router";
import star from "../assets/orange-star.png";
import SignupModal from "../modals/SignupModal";
import LoginModal from "../modals/LoginModal";
import { useState } from "react";

export default function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  return (
    <header className="flex justify-between px-2 py-2 font-semibold shadow-sm shadow-zinc-600 hover:bg-zinc-700 md:px-4">
      <Link to="/">
        <img className="h-12 w-12" src={star} alt="eagle" />
      </Link>
      <ul className="flex items-center gap-8">
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "text-cyan-300" : "")}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/careers"
            className={({ isActive }) => (isActive ? "text-cyan-300" : "")}
          >
            Careers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "text-cyan-300" : "")}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <button
            onClick={() => {
              setIsLoginOpen(true);
            }}
          >
            Login
          </button>
          <LoginModal
            isLoginOpen={isLoginOpen}
            setIsLoginOpen={setIsLoginOpen}
          />
        </li>
        <li>
          <button
            onClick={() => {
              setIsSignupOpen(true);
            }}
          >
            Signup
          </button>
          <SignupModal
            isSignupOpen={isSignupOpen}
            setIsSignupOpen={setIsSignupOpen}
          />
        </li>
      </ul>
    </header>
  );
}
