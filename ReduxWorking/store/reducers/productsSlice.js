import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    list: [],
    error: "",
  },
  reducers: {
    updateLoader(state) {
      state.loading = true;
    },
    updateError(state, action) {
      state.loading = false;
      state.error = action.payload || "Something went wrong..";
    },
    updateAllProducts(state, action) {
      state.loading = false;
      state.error = "";
      state.list = action.payload;
    },
  },
});
export const selectorGetAllProductsState = (state) => state.products.list;
export const selectorGetIsLoadingState = (state) => state.products.loading;
export const selectorGetIsErrorState = (state) => state.products.error;

const { updateAllProducts, updateLoader, updateError } = slice.actions;

export const thunkGetAllProducts = (dispatch) => {
  dispatch(updateLoader());
  fetch(`https://fakestoreapi.com/products`)
    .then((res) => res.json())
    .then((products) => {
      dispatch(updateAllProducts(products));
    })
    .catch(() => {
      dispatch(updateError());
    });
};

export const productsReducer = slice.reducer;
