export default class ApiResponse<T> {
  public readonly status: number;
  public readonly code: number;
  public readonly data: T;

  constructor(status: number, code: number, data: T) {
    this.status = status;
    this.code = code;
    this.data = data;
  }
}
