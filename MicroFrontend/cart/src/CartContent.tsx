import React, { useEffect, useState } from "react";
import { login, jwt } from "./cart";
import Login from "./Login";
import MiniCart from "./MiniCart";

const CartContent = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const subscription = jwt.subscribe((value) => setToken(value ?? ""));
    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="w-full h-96">
      <h1>JWT : {token}</h1>
      <Login />
      <MiniCart />
    </div>
  );
};
export default CartContent;
