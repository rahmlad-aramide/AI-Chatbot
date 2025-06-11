import { post } from "@/services/axios";
import { IUserLoginRequestBody, IUserLoginResponse, IUserRegisterRequestBody, IUserRegisterResponse } from "@/types/requests";

export const userLogin = async (
  credentials: IUserLoginRequestBody
): Promise<IUserLoginResponse> => {
  const response = await post<IUserLoginResponse>("/auth/login", credentials);
  return response;
};

export const userRegister = async (
  credentials: IUserRegisterRequestBody
): Promise<IUserRegisterResponse> => {
  const response = await post<IUserRegisterResponse>(
    "/auth/register",
    credentials
  );
  return response;
};
