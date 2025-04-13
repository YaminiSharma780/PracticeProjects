import React, { useState, useEffect } from "react";
import { getProducts, currency } from "./products";

const Home = () => {
  const [products, setProducts] = useState<
    { id: number; image: string; name: string; price: number }[]
  >([]);
  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="home">
      <div className="my-10 grid gap-5 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {products.map((product) => (
          <div
            key={product.id}
            className=" flex flex-col justify-between border-1 border-solid border-black"
          >
            <img
              className="object-cover"
              src={product.image}
              alt={product.name}
            />
            <div className="flex justify-between items-center mt-2">
              <span className="font-bold">{product.name}</span>
              <span>{currency.format(product.price)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
