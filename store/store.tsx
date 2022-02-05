import { configureStore } from "@reduxjs/toolkit";
import priceReducer from "../store/reducers/priceSlice";

export const store = configureStore({
  reducer: {
    price: priceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
