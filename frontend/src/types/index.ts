/***
 * User credentials used to login or
 * register into the system
 */
export type UserCredentials = {
  email: string;
  password: string;
};

/***
 * Used to represent different states
 * of the lifecycle of an api request
 */
export type RequestStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

/***
 * User authentication data returned
 * after login or registration
 */
export type UserAuth = {
  user: string;
  token: string;
};
