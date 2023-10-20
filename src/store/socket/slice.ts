import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getMarketDataThunk } from "./thunks";


export interface State {
  marketData: any;
}

const initialState: State = {
  marketData: null,
};
export const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getMarketDataThunk.fulfilled, (state, action) => {
      state.marketData = action.payload;
    });
  },
});

export const selectMarketData = (state: RootState) => state.market.marketData;

export default marketSlice.reducer;



