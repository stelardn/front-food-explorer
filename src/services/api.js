import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-food-explorer.onrender.com",
  // baseURL: "http://localhost:3002",
});
