import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PriceState {
  price: number;
  supply: number;
  supplyNoVirtual: number;
  loading: boolean;
}

const initialState: PriceState = {
  price: 0,
  supply: 0,
  supplyNoVirtual: 0,
  loading: false,
};

export const priceSlice = createSlice({
  name: "currentPrice",
  initialState,
  reducers: {
    setPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
    setSupply: (state, action: PayloadAction<number>) => {
      state.supply = action.payload;
    },
    setSupplyNoVirtual: (state, action: PayloadAction<number>) => {
      state.supplyNoVirtual = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setPrice, setSupply, setSupplyNoVirtual, setLoading } =
  priceSlice.actions;

export default priceSlice.reducer;
