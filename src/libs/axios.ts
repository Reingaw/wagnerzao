import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
  headers: {
    "x-api-key": "ZAO_TUTOR_MOBILE_SECRET_2026",
    "Content-Type": "application/json",
  },
});

export const createRequest = (prefix: string) => {
  return {
    get: (endpoint: string, params: Object) =>
      api.get(`${prefix}/${endpoint}`, { params }),
    post: (endpoint: string, params: Object) =>
      api.post(`${prefix}/${endpoint}`, params),
  };
};
