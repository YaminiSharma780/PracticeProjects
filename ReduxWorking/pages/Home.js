import React from "react";
import { useSelector } from "react-redux";
import Product from "../components/Product";
import Loader from "./Loader";
import Error from "./Error";
import {
  selectorGetAllProductsState,
  selectorGetIsErrorState,
  selectorGetIsLoadingState,
} from "../store/reducers/productsSlice";

export default function Home() {
  const productsList = useSelector(selectorGetAllProductsState);
  const isLoading = useSelector(selectorGetIsLoadingState);
  const isError = useSelector(selectorGetIsErrorState);
  // console.log(isLoading, isError);

  return isLoading === true ? (
    <Loader />
  ) : isError ? (
    <Error isError={isError} />
  ) : (
    <div className="products-container">
      {productsList.map(({ id, title, rating, price, image }) => (
        <Product
          key={id}
          productId={id}
          title={title}
          rating={rating.rate}
          price={price}
          imageUrl={image}
        />
      ))}
    </div>
  );
}
