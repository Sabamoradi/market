import { createAppAsyncThunk } from "../appAsyncThunk";

export const getSocketConnection = createAppAsyncThunk(
  "socket/connectSocket",
  () => {
    const ws = new WebSocket("wss://ws.bitpin.ir/");
    console.log(ws, "response");

    ws.onopen = function () {
      ws.send(
        JSON.stringify({
          method: "sub_to_price_info",
        })
      ); // this works
    };
    ws.onmessage = function (event) {};

    // return ws;
  }
);
