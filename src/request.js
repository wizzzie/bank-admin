import axios from "axios";

// const BASE_URL = "http://localhost:5000";
const BASE_URL = "https://banking-api-zhqq.onrender.com";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
