import React, { useEffect, useState } from "react";
import { cart, clearCart } from "./cart";
import { currency } from "mdfdapp1/products";

const MiniCart = () => {
  const [items, setItems] = useState<any[]>([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    setItems(cart.value || []);
    const subscription = cart.subscribe((c) => setItems(c || []));
    return () => subscription.unsubscribe();
  }, []);

  if (!items) {
    return null;
  }
  return (
    <span id="show-cart" onClick={() => setShowCart(!showCart)}>
      <i id="show-cart-items" className="ri-shopping-cart-2-fill text-2xl" />
      {items.length}
    </span>
  );
};
export default MiniCart;
