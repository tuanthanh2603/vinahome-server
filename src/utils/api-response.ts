export class ApiResponse<T> {
  status: number;
  message: string;
  result: T;
  constructor(status: number, message: string, result: T) {
    this.status = status;
    this.message = message;
    this.result = result;
  }
  static success<T>(result: T, message = 'Success'): ApiResponse<T> {
    return new ApiResponse<T>(200, message, result);
  }
  static error<T>(
    message = 'Error',
    status = 500,
    result: T = null,
  ): ApiResponse<T> {
    return new ApiResponse<T>(status, message, result);
  }
}
