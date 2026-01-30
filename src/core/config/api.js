import axios from "axios";
import { getCookie, setCookie } from "../utils/cookie";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  (request) => {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    
    const originalRequest = error.config;
    if (
      error.response?.status === 401 ||
      (error.response?.status === 403 && !originalRequest._retry)
    ) {
      originalRequest._retry = true;
      const res = await getNewTokens();
      console.log(res);
      if (res.status === 200) {
        setCookie("accessToken", res.data?.accessToken, 30);
        return api(originalRequest);
      }
    } else {
      setCookie("accessToken", "", 0);
      setCookie("refreshToken", "", 0);
    }
    return Promise.reject(error.response?.data);
  }
);

const getNewTokens = async () => {
  const refreshToken = getCookie("refreshToken");
  
  if (!refreshToken) return;
  try {
    const response = await axios.post(`${BASE_URL}/auth/refresh-token`, {
      refreshToken,
    });
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export default api;
