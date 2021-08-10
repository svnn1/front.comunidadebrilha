import { api } from "@/core/api";
import { IAuth, IForgotPassword } from "./types";

export const getAuthenticatedUser = async (): Promise<unknown> => {
  const { data } = await api.get<unknown>("/auth/me");

  return data;
};

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<IAuth> => {
  const response = await api.post("/auth/login", { email, password });

  return response.data.data;
};

export const forgotPassword = async ({
  email,
}: {
  email: string;
}): Promise<IForgotPassword> => {
  const response = await api.post("/auth/password/email", {
    email,
    url: "http://localhost:8080/recuperar-senha/{token}",
  });

  return response.data.data;
};

export const resetPassword = async ({
  email,
  password,
  passwordConfirmation,
  token,
}: {
  email: string;
  password: string;
  passwordConfirmation: string;
  token: string | string[];
}): Promise<IForgotPassword> => {
  const response = await api.post("/auth/password/reset", {
    email,
    password,
    password_confirmation: passwordConfirmation,
    token,
  });

  return response.data.data;
};
