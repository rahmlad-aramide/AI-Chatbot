/**
 * Interface for the user login request body.
 */
export interface IUserLoginRequestBody {
  email: string;
  password: string;
}

/**
 * Represents the subscription tier of a user.
 */
export type SubscriptionTier = "free" | "premium" | "pro";

/**
 * Represents the status of a user account.
 */
export type UserStatus = "active" | "inactive" | "suspended";

/**
 * Interface for the 'user' object nested within the data.
 */
export interface User {
  _id: string;
  email: string;
  password?: string;
  firstName: string;
  lastName: string;
  subscriptionTier: SubscriptionTier;
  status: UserStatus;
  dataProcessingConsent: boolean;
  roles: string[];
  createdAt: string; 
  updatedAt: string; 
}

/**
 * Interface for the 'data' object in the user login response.
 */
export interface IUserLoginData {
  token: string;
  user: User; 
}

/**
 * Interface for the user login response structure.
 */
export interface IUserLoginResponse {
  success: boolean;
  message: string;
  code: number;
  returnStatus: string;
  data: IUserLoginData;
}


/**
 * Interface for the user register request body.
 */
export interface IUserRegisterRequestBody {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

/**
 * Interface representing the structure of the user data returned upon registration.
 */
export interface IRegisteredUserData {
  email: string;
  password?: string;
  firstName: string;
  lastName: string;
  subscriptionTier: SubscriptionTier;
  status: UserStatus;
  dataProcessingConsent: boolean;
  roles: string[];
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

/**
 * Interface representing the full API response for user registration.
 */
export interface IUserRegisterResponse {
  success: boolean;
  message: string;
  code: number;
  returnStatus: string;
  data: IRegisteredUserData;
}