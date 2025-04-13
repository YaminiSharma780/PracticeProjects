import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

// Slice Reducer from Redux Toolkit
// createSlice() will create Action Creator, Action Type, Reducer together in one go
const searchElement = (state, action) =>
  state.findIndex(
    (cartItem) => cartItem.productId === action.payload.productId
  );

export const asyncThunkGetAllCartItems = createAsyncThunk(
  "cart/loadCartItems",
  async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/carts/5");
      return response.json();
    } catch (err) {
      throw err;
    }
  }
);

const slice = createSlice({
  name: "cartItems",
  initialState: {
    loading: false,
    list: [],
    error: "",
  },
  reducers: {
    cartAddItem(state, action) {
      const foundElementIndex = searchElement(state.list, action);
      if (foundElementIndex !== -1) {
        state.list[foundElementIndex].quantity += 1;
      } else {
        state.list.push({ ...action.payload, quantity: 1 });
      }
    },
    cartRemoveItem(state, action) {
      const foundElementIndex = searchElement(state.list, action);
      state.list.splice(foundElementIndex, 1);
    },
    cartIncreaseQuantity(state, action) {
      const foundElementIndex = searchElement(state.list, action);
      state.list[foundElementIndex].quantity += 1;
    },
    cartDecreaseQuantity(state, action) {
      const foundElementIndex = searchElement(state.list, action);
      state.list[foundElementIndex].quantity -= 1;
      if (state.list[foundElementIndex].quantity === 0) {
        state.list.splice(foundElementIndex, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncThunkGetAllCartItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(asyncThunkGetAllCartItems.fulfilled, (state, action) => {
        console.log("payload : ", action.payload.products);
        state.loading = false;
        state.list = action.payload.products || [];
      })
      .addCase(asyncThunkGetAllCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong..";
      });
  },
});

export const getAllCartItemsState = ({ products, cartItems }) => {
  return cartItems.list
    .map(({ productId, quantity }) => {
      const cartProduct = products.list.find(
        (product) => product.id === productId
      );
      return { ...cartProduct, quantity };
    })
    .filter(({ title }) => title);
};

// Memoizing selectorGetAllCartItemsState here with the help of createSelector
export const selectorGetAllCartItemsState = createSelector(
  getAllCartItemsState,
  (cartItems) => cartItems
);
export const selectorGetIsLoadingState = (state) => state.cartItems.loading;
export const selectorGetIsErrorState = (state) => state.cartItems.error;
export const {
  cartAddItem,
  cartRemoveItem,
  cartIncreaseQuantity,
  cartDecreaseQuantity,
} = slice.actions;
export const cartReducer = slice.reducer;
