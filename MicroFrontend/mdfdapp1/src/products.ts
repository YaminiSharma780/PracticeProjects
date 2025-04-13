const API_SERVER = "http://localhost:8080";

export const getProducts = (): Promise<any> => {
  return fetch(`${API_SERVER}/products`).then((res) => res.json());
};

export const getProductsById = (id: string | number): Promise<any> => {
  return fetch(`${API_SERVER}/products/${id}`).then((res) => res.json());
};

export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
