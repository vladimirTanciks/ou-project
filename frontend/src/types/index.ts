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

/***
 * System notificator used to
 * provide feed feedback to user
 */
export type NotificatorInfo = {
  message: string;
  type: 'success' | 'info' | 'warning' | 'error';
};

/***
 * Report entity used to represent
 * a reported dump
 */
export type Report = {
  id?: string;
  user?: string;
  location: string;
  image: string;
  size: string;
  type: string;
  details: string;
};
