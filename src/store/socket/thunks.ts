import { createAppAsyncThunk } from "../appAsyncThunk";

export const getSocketConnection = createAppAsyncThunk(
  "socket/connectSocket",
  () => {
    const ws = new WebSocket("wss://ws.bitpin.ir/");
    console.log(ws, "response");

    ws.onopen = function () {
      // ws.send("open"); // this works
    };
    ws.onmessage = function (event) {
      alert("Message received..." + event.data);
    };

    // return ws;
  }
);
