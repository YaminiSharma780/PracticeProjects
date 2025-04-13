export const apiMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    const BASE_URL = "https://fakestoreapi.com";
    if (action.type === "api/makeCall") {
      next(action);
      const { url, onStart, onSuccess, onFailure } = action.payload;
      dispatch({
        type: onStart,
      });
      fetch(`${BASE_URL}/${url}`)
        .then((res) => res.json())
        .then((productsList) => {
          dispatch({
            type: onSuccess,
            payload: productsList,
          });
        })
        .catch(() => {
          dispatch({
            type: onFailure,
          });
        });
    } else {
      next(action);
    }
  };

export const fetchData = (payload) => ({ type: "api/makeCall", payload });
