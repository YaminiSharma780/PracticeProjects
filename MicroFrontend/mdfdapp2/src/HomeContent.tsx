import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getProductsById, currency } from "mdfdapp1/products";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  longDescription: string;
}

const HomeContent = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      getProductsById(id).then(setProduct);
    } else {
      setProduct(null);
    }
  }, [id]);

  if (!product) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <div className="flex flex-col gap-2.5">
          <div className="flex flex-row justify-center">
            <h1 className="font-bold text-2xl flex-grow">{product.name}</h1>
            <div className="font-bold text-2xl flex-end">
              {currency.format(product.price)}
            </div>
          </div>
          <div className="flex flex-col justify-center gap-2.5">
            <p className="font-bold flex-grow">{product.description}</p>
            <div className="flex-end">{product.longDescription}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
