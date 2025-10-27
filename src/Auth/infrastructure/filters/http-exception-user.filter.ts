import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { UserNotFound } from 'src/Auth/domain/exceptions/user-not-found';

@Catch(UserNotFound)
export class UserNotFoundFilter implements ExceptionFilter {
  catch(exception: UserNotFound, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(HttpStatus.NOT_FOUND).json({
      statusCode: HttpStatus.NOT_FOUND,
      message: exception.message,
      data: 'Asdasdsa',
    });
  }
}
