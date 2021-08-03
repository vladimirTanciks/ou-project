import { CustomError } from '../errors/custom-error'

export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  reason = 'Error connection to database';
  
  constructor() {
    super('Error connection to db');

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
  }

  serializeErrors() {
    return [
      {
        message: this.reason
      }
    ]
  }
}
