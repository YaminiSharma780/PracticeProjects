import React from "react";
import { useDispatch } from "react-redux";
import { wishListRemoveItem } from "../store/reducers/wishlistSlice";

export default function WishListItem({
  productId,
  title,
  rating,
  price,
  imageUrl,
  quantity,
}) {
  const dispatch = useDispatch();
  // console.log(productId, title, rating, price, imageUrl, quantity);

  return (
    <div className="wish-list-item-container">
      <div className="wish-list-item">
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
          <button onClick={() => dispatch(wishListRemoveItem(productId))}>
            Delete
          </button>
        </div>
      </div>
      <div className="item-price">${price}</div>
    </div>
  );
}
