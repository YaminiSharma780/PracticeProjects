import { createSelector, createSlice } from "@reduxjs/toolkit";

// Slice Reducer from Redux Toolkit
// createSlice() will create Action Creator, Action Type, Reducer together in one go
const searchElement = (state, action) =>
  state.findIndex(
    (wishListItem) => wishListItem.productId === action.payload.productId
  );
const slice = createSlice({
  name: "wishList",
  initialState: {
    loading: false,
    list: [],
    error: "",
  },
  reducers: {
    updateWishListLoader(state) {
      state.loading = true;
    },
    updateWishListError(state, action) {
      state.loading = false;
      state.error = action.payload || "Something went wrong..";
    },
    loadWishListItems(state, action) {
      state.loading = false;
      state.error = "";
      state.list = action.payload.products;
    },
    wishListAddItem(state, action) {
      const foundElementIndex = searchElement(state.list, action);
      if (foundElementIndex === -1) {
        state.list.push({ ...action.payload });
      }
    },
    wishListRemoveItem(state, action) {
      const foundElementIndex = searchElement(state.list, action);
      state.list.splice(foundElementIndex, 1);
    },
  },
});

export const getAllWishListState = (wishList, products) => {
  return wishList.map(({ productId }) => {
    const wishListProduct = products.find(
      (product) => product.id === productId
    );
    return wishListProduct;
  });
};
// Memoizing selectorGetAllCartItemsState here with the help of createSelector
export const selectorGetAllWishListState = createSelector(
  (state) => state.wishList.list || [],
  (state) => state.products.list || [],
  getAllWishListState
);
export const selectorGetIsLoadingState = (state) => state.wishList.loading;
export const selectorGetIsErrorState = (state) => state.wishList.error;

const { loadWishListItems, updateWishListLoader, updateWishListError } =
  slice.actions;

export const thunkGetAllWishListItems = (dispatch) => {
  dispatch(updateWishListLoader());
  fetch(`https://fakestoreapi.com/carts/5`)
    .then((res) => res.json())
    .then((wishList) => {
      dispatch(loadWishListItems(wishList));
    })
    .catch(() => {
      dispatch(updateWishListError());
    });
};

export const { wishListAddItem, wishListRemoveItem } = slice.actions;
export const wishListReducer = slice.reducer;
