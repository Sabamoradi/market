import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getSocketConnection } from "./thunks";




const initialState = {
  socketData: null,
};
export const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getSocketConnection.fulfilled, (state, action) => {
      console.log(action);
      
    });
  },
});

export const selectSocketConnection = (state: RootState) => state.socket.socketData;

export default socketSlice.reducer;



