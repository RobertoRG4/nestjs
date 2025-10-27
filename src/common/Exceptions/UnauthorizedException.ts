import { HttpException, HttpStatus } from '@nestjs/common';

export class UnauthorizedException extends HttpException {
  constructor(message: string = 'Unauthorized') {
    super(
      { statusCode: HttpStatus.UNAUTHORIZED, message },
      HttpStatus.UNAUTHORIZED,
    );
  }
}
