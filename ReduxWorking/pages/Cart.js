import React from "react";
import CartItem from "../components/CartItem";
import "../App.css";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import Error from "./Error";
import {
  selectorGetAllCartItemsState,
  selectorGetIsErrorState,
  selectorGetIsLoadingState,
} from "../store/reducers/cartSlice";

export default function Cart() {
  const cartItems = useSelector(selectorGetAllCartItemsState);
  // console.log(cartItems);

  const isLoading = useSelector(selectorGetIsLoadingState);
  const isError = useSelector(selectorGetIsErrorState);
  // console.log(isLoading, isError);

  return isLoading === true ? (
    <Loader />
  ) : isError ? (
    <Error isError={isError} />
  ) : (
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        {cartItems.map(({ id, title, rating, price, image, quantity }) => {
          return (
            <CartItem
              key={id}
              productId={id}
              title={title}
              price={price}
              quantity={quantity}
              imageUrl={image}
              rating={rating.rate}
            />
          );
        })}

        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          {!isLoading && (
            <div className="total">
              $
              {cartItems
                .reduce(
                  (total, cartItem) =>
                    total + cartItem.price * cartItem.quantity,
                  0
                )
                .toFixed(2)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
