import { useState, useEffect } from "react";
import { login, useLoggedIn } from "./cart";
import "remixicon/fonts/remixicon.css";

const Login = () => {
  const loggedIn = useLoggedIn();
  const [showLogin, setShowLogin] = useState(false);

  const [username, setUsername] = useState("sally");
  const [password, setPassword] = useState("123");

  if (loggedIn) return null;
  return (
    <>
      <span onClick={() => setShowLogin(!showLogin)}>
        <i id="show-login" className="ri-fingerprint-line text-2xl" />
      </span>
      {showLogin && (
        <div
          style={{ width: 300, top: "5rem", left: "2rem" }}
          className="absolute p-5 border-2 border-green-900"
        >
          <input
            className="border text-sm border-gray-400 p-2 rounded-md w-full"
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className="border text-sm border-gray-400 p-2 rounded-md w-full"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="bg-green-900 text-white py-2 px-5 rounded-md w-full"
            onClick={() => login(username, password)}
            id="login-btn"
          >
            Login
          </button>
        </div>
      )}
    </>
  );
};
export default Login;
