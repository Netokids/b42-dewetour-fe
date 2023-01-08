import axios from "axios";

export const API = axios.create({
  baseURL: `https://b42-dewetour-be-production.up.railway.app/`,
});

export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};