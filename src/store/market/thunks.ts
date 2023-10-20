import { createAppAsyncThunk } from "../appAsyncThunk";
import { getMarketData } from "./api";

export const getMarketDataThunk = createAppAsyncThunk(
  "market/getMarketData",
  async () => {
    const response = (await getMarketData()).data;
    return response;
  }
);
