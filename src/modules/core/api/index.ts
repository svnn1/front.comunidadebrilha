import axios from "axios";

import { API_URL } from "@/modules/support/helpers/constants";
import { auth, expiresAuth } from "@/modules/auth/state/auth";
import router from "../router";

export const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  (config) => {
    if (auth.value.access_token) {
      config.headers.Authorization = `Bearer ${auth.value.access_token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.request.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    if (error && error.response.status === 401) {
      expiresAuth();

      router.push({ name: "SignIn" });
    }

    return Promise.reject(error);
  }
);
