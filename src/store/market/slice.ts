import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getMarketDataThunk } from "./thunks";


export interface State {
  marketData: any;
  marketDataloading:boolean
}

const initialState: State = {
  marketData: [],
  marketDataloading:false
};
export const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getMarketDataThunk.pending, (state, action) => {
      state.marketDataloading = true;
    });
    builder.addCase(getMarketDataThunk.fulfilled, (state, action) => {
      state.marketDataloading = false;
      state.marketData = action.payload.results;
    });
  },
});

export const selectMarketData = (state: RootState) => state.market.marketData;
export const selectMarketDataLoading = (state: RootState) => state.market.marketDataloading;

export default marketSlice.reducer;



