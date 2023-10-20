import axios from "axios";

const apiBaseURL = 'https://api.bitpin.ir/v1';
const socketBaseUrl = 'wss://ws.bitpin.ir'


export const socketService = axios.create({
  baseURL: socketBaseUrl,
  headers: {
      // "Content-Type": "application/json"
  }
});

export const httpService = axios.create({
  baseURL: apiBaseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

httpService.interceptors.request.use(async (config) => {
  return config;
});

httpService.interceptors.response.use(
  function (response) {
    console.log(response);

    return response;
  },
  function (error) {
    console.log(error);

    return Promise.reject(error);
  }
);
